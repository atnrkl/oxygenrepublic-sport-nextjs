import Navbar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/Footer";

const galeri = () => {
  return (
    <div className="font-mono">
      <div className="text-gray-200 bg-black h-screen lg:h-full  w-full items-center">
        <Navbar />

        <div className="px-10 lg:px-40 h-full bg-black">
          <p className="pt-32">
            4.400m² alanda inovatif antrenman seçenekleri, havuz, sauna ve
            jakuzi ile büyük bir wellness alanı ve daha fazlasına sahip olan
            şehrin ilk Oxygen Republic Fitness ve Müzik Kulübü’nü Metropol
            İstanbul’da açtık! Çeşitli antrenmanlar, canlı DJ performansları,
            özel üye davetleri ve ilham veren tasarımı ile dünyada benzeri
            olmayan kulübümüze seni de bekliyoruz!
          </p>
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            emulateTouch={true}
            className="mt-10 lg:mt-60 lg:mx-52  "
          >
            <div>
              <img src="./gallery-1.jpg" height="800" />
            </div>
            <div>
              <img src="./gallery-2.jpg" height="800" />
            </div>
            <div>
              <img src="./gallery-3.jpg" height="800" />
            </div>
            <div>
              <img src="./gallery-4.jpg" height="800" />
            </div>
            <div>
              <img src="./gallery-5.jpg" height="800" />
            </div>
            <div>
              <img src="./gallery-6.jpg" height="800" />
            </div>
          </Carousel>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default galeri;
