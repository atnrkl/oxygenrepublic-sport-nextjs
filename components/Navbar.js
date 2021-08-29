const Navbar = () => {
  return (
    <div className="font-mono">
      <div className=" flex flex-col relative items-center justify-center w-full z-40 text-gray-100  ">
        {/* logo */}
        <a
          className="text-2xl sm:text-3xl md:text-4xl mt-5 font-mono border-b-2 tracking-wider"
          href="/"
        >
          OXYGEN REPUBLIC
        </a>
        <div className="text-sm sm:text-lg md:text-2xl items-center justify-center mt-4 space-x-6 md:space-x-20 ">
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
  );
};

export default Navbar;
