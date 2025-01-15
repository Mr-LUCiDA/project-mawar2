import Navbar from "./components/Navbar";
import heroImg from "./assets/pics/cover.png";
import { Info } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CardImage from "./components/CardImage";
import { images } from "./constants/images";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const Button = ({ children, variant, ...rest }) => {
    return (
      <button
        className={`flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out ${
          variant == "primary" && "bg-white text-black "
        } ${variant == "secondary" && "bg-white/30 text-white"}`}
        {...rest}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white ">
          <h1
            className="lg:text-4xl text-2xl font-bold lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            I'm Not Good with Words, But This Is My Way to Say Happy Birthday.
          </h1>
          <p
            className="text-sm lg:text-base lg:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Website ini aku buat sebagai hadiah ulang tahun kamu yang ke-22.
            Sebagian besar isi dari website ini adalah semua kenangan yang telah
            kita lewati sebagai pasangan serta ucapan ulang tahun buat kamu yang 
            aku tulis dengan sungguh-sungguh, jadi aku berharap perasaanku akan
            tersampaikan secara utuh ke kamu. Aku berharap dengan adanya website 
            ini bisa jadi pengingat betapa sayangnya aku sama kamu.
            Happy Birthday My Lovely!!!!
                    
          </p>
          <p data-aos="fade-right" data-aos-duration="1300">
            Click "Play" to see Details
          </p>
          <div
            className="actions flex items-center gap-3"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Button variant={"primary"} onClick={() => setOpenModal(true)}>
              <FaPlay />
              Play
            </Button>
            <Button variant={"secondary"}>
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-black text-white">
        <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
          <h3 className="font-semibold text-xl">More to Explore : Us</h3>
          <section className=" grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            {images.map((image, idx) => (
              <CardImage src={image.src} key={idx} idx={idx} />
            ))}
          </section>
        </div>
      </section>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] "
          style={{
            backgroundImage: `url(/src/assets/pics/message.jpg)`,
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
          <h1 className="font-bold text-2xl">Happy Birthday, Rosdianaku Tersayang </h1>
          <p>Sayangg....</p>
          <p>
          Halo Rosdianaku tersayangggg, selamat ulang tahun yaaa. 
          Jadi seperti tahun lalu, aku buat website ini sebagai salah 
          satu hadiah ulang tahun buat kamu hehe. Aku bersyukur banget 
          tahun ini masih bisa ngerayain ulang tahun kamu sebagai pacar. 
          Harapanku buat ulang tahun kamu yang ke-22 ini, aku berharap 
          kamu selalu bisa bahagia, selalu sehat, dan yang pasti bisa 
          menjadi pribadi yang lebih baik lagi. Terima kasih yaa udah 
          bisa jadi pewarna dalam hidup aku yang sebelumnya cuma gitu 
          gitu aja wkwk. Makasii juga udah ngajarin aku banyak hal 
          terutama tentang bagaimana kita menghargai sesuatu kaya cara 
          menikmati momen momen kecil gitu. Kamu orang yang hebat ros. 
          Kamu selalu bisa ngasih energi yang positif ke aku dan orang 
          orang sekitar kamu. Aku bener bener respect sama kamu tentang
          hal itu. Ros, aku mau ngomong aja, aku tahu kok hidup kadang 
          emang kerasa berattt banget, tapi aku percaya kok ros, kamu 
          pasti bisa ngelewatin itu, aku percaya kamu bakal diberi kekuatan 
          buat menghadapi semua itu. Jangan nyerah yaa, aku mohon ke kamu, 
          aku bakal selalu dukung kamu kok, aku bakal selalu berusaha 
          nemenin kamu buat jalan ke depan. Tahun ini aku berdoa semoga 
          semua keinginan kamu di tahun ini tercapai, aku juga berharap 
          tahun ini kamu makin dikelilingin sama orang yang peduli dan 
          sayang sama kamu. Happy birthday my favorite person, tahun kita 
          jalanin bareng bareng lagi yaa. Ayo kita seneng seneng bareng lagi, 
          kita happy happy bareng lagi hehe. Aku selalu sayang dan cinta sama 
          kamu, aku bener bener bersyukur ada kamu di hidup aku. Kamu berharga 
          banget ros buat aku. I love you sweetheart, semoga cinta dan kasih 
          selalu menyertai kita. 
          </p>
          <p>
            Yours, now, and forever,
            <br />
            Faiza Fadilla
          </p>
        </div>
      </Modal>
    </main>
  );
}

export default App;
