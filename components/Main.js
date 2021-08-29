import sidePic from "../images/side-pic-2.jpg";
import Image from "next/image";

import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="bg-black text-gray-200 font-mono ">
      {/* INFO */}
      <div className="flex p-5  items-center justify-center">
        <div className="max-w-2xl">
          <p className="font-mono text-left md:text-center text-6xl mt-5 md:mt-10">
            OXYGEN REPUBLIC FITNESS ISTANBUL
          </p>
          <p className=" mt-5 ">
            Yeniden buluşuyoruz! T.C. İçişleri Bakanlığı tarafından yayınlanan
            Haziran Ayı Normalleşme Tedbirleri Genelgesi doğrultusunda kulübümüz
            1 Haziran’da yeniden açıldı! Çalışma saatlerimizi Pazar günleri
            hariç 07.00-21.00 olarak güncelledik. Duyurularımızı Instagram &
            Facebook sayfalarımız üzerinden de takip edebilirsin!
          </p>
        </div>
      </div>
      {/* VIDEO */}
      <div>
        <div className="w-full h-45 ">
          <video autoPlay loop muted src={require("../public/main-video.mp4")}>
            {/* <source src={require("../public/main-video.mp4")} /> */}
          </video>
        </div>
      </div>
      {/* BOTTOM INFO */}

      {/* CONTACT */}
      <Footer />
    </div>
  );
};

export default Main;
