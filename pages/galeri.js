import Navbar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const galeri = () => {
  return (
    <div>
      <div className="text-gray-200 bg-black h-screen lg:h-full  w-full items-center">
        <Navbar />
        <div className="w-70 h-full bg-black">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
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
      </div>
    </div>
  );
};

export default galeri;
