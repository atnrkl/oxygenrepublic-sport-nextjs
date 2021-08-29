import Navbar from "../components/Navbar";
import { connect } from "../utils/dbconnection";

function uyelik({ props }) {
  //   console.log(params);
  return (
    <div className="bg-font-mono bg-black text-gray-200 h-screen items-center justify-center ">
      <Navbar />

      <div className="flex text-center pt-16 flex-col items-center">
        <p className="pb-5">Üyelik bilgileriniz için üye no giriniz</p>
        <p className="pb-2">Üye no</p>
        <input name="uyeNo" type="text" className="text-black p-1 max-w-xs" />
        <button className="mt-4 border border-white p-2 " type="submit">
          Sorgula
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  // don't redirect the page

  const { db } = await connect();

  //   console.log(db);
  //   const userInfo = await db
  //     .collection("customers")
  //     .find({ _id: "611f7e87f2c924d11e2ed4db" })
  //     .sort();

  const userInfo = await db
    .collection("customers")
    .find({ _id: "611f7e87f2c924d11e2ed4db" });

  return { props: {} };
}

export default uyelik;
