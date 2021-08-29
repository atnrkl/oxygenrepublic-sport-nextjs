import Footer from "../components/Footer";
import Map from "../components/Map";
import Navbar from "../components/Navbar";

function iletisim() {
  return (
    <div className="font-mono px-10 bg-black text-gray-200 items-center h-screen justify-center">
      <Navbar />

      <p className="pt-32 lg:px-64 ">
        İBB Destek Hizmetleri Daire Başkanlığı Gençlik ve Spor Müdürlüğü İBB
        <br />
        Lojistik Destek Merkezi Akşemsettin Mah.Akşemsettin Bulvarı No :138/887
        Alibeyköy-Eyüp / İSTANBUL
        <br /> +90 212 600 87 00
        <br />
        +90 212 600 95 78
        <br />
        info@istanbulsporenvanteri.com
        <br />
        genclikspor@ibb.gov.tr
      </p>
      <div className="bottom-0 items-center justify-center pt-10 lg:px-64">
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default iletisim;
