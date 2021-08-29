import Navbar from "../components/Navbar";
import connectDB from "../middleware/mongodb";
import contactform from "../models/contactform";
import { async } from "regenerator-runtime";

function kayitol() {
  const registerUser = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    console.log(formData);

    const response = await fetch("/api/registerform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    });
    const data = await response.json();
  };
  return (
    <div className="font-mono bg-black text-gray-200">
      <div className="h-screen w-full items-center justify-center">
        <Navbar />
        <div className=" mt-32 justify-center items-center text-center">
          <div className="">
            <form
              onSubmit={registerUser}
              className="flex items-center flex-col justify-start "
            >
              <div className="items-center flex flex-col space-y-3 w-1/3">
                <p className="text-2xl mb-10">BİZ SİZE ULAŞALIM</p>
                <p>İsim</p>
                <input
                  name="name"
                  type="text"
                  required
                  className="p-1 text-black"
                />
                <p>Email</p>
                <input
                  name="email"
                  type="text"
                  required
                  className="p-1 text-black"
                />
                <p>Telefon numarası</p>
                <input
                  name="phone"
                  type="text"
                  required
                  className="p-1 text-black"
                />
                <button className="border p-2" type="submit">
                  Kayıt Oluştur
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default kayitol;
