import Image from "next/image";

import headerPic from "../images/header-pic-9.jpg";
import { ShuffleText } from "../utils/ShuffleText";

const Header = () => {
  return (
    <div className="flex items-center  bg-black justify-center relative font-mono">
      {/* NAV */}

      <div className="flex overflow-hidden items-start justify-center relative">
        <Image
          className=" grayscale object-cover lg:object-contain h-40 "
          src={headerPic}
          height={1400}
          width={1280}

          //   layout="responsive"
        />
        {/* nav */}
        <div className=" flex flex-col absolute items-center justify-center w-full z-40 text-gray-100  ">
          {/* logo */}
          <a
            className="text-2xl sm:text-3xl md:text-4xl mt-5 font-mono border-b-2 tracking-wider"
            href="/"
          >
            OXYGEN REPUBLIC
          </a>
          <div className="text-md sm:text-xl md:text-2xl items-center justify-center mt-4 space-x-6 md:space-x-20 ">
            <a href="/iletisim" className="border-b-2 pb-1">
              İletişim
            </a>
            <a href="/galeri" className="border-b-2 pb-1">
              Galeri
            </a>
            <a href="/hakkimizda" className="border-b-2 pb-1">
              Hakkımızda
            </a>
            <a href="/kayitol" className="border-b-2 pb-1">
              Kayıt Ol
            </a>
          </div>
        </div>
      </div>
      {/* mid text */}
      <div className="flex flex-col md:flex absolute mx-4  items-center justify-center space-x-5  ">
        <p className="text-2xl sm:text-3xl md:text-6xl px-4 mx-4 text-gray-50 font-mono">
          şimdi başla
        </p>
        <p className="text-green-400 md:mb-80 text-2xl sm:text-3xl md:text-6xl tracking-wider items-center font-mono">
          <ShuffleText />
        </p>
      </div>
      <div>{/* menu list */}</div>
    </div>
  );
};

export default Header;
