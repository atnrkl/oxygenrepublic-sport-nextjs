import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="left-0 bottom-0 flex flex-col items-center ">
        <div className="flex h-40 p-30 w-full  space-x-6 items-center justify-center">
          <div className="flex space-x-7">
            <FaFacebook
              size={25}
              className="text-gray-200 hover:text-blue-800 cursor-pointer"
            />
            <FaInstagram
              size={25}
              className="text-gray-200 hover:text-pink-600 cursor-pointer"
            />
            <FaTwitter
              size={25}
              className="text-gray-200 hover:text-blue-800 cursor-pointer"
            />
            <FaWhatsapp
              size={25}
              className="text-gray-200 hover:text-whatsapp_green cursor-pointer"
            />
          </div>
        </div>
        <p>© 2021</p>
      </div>
    </div>
  );
}

export default Footer;
