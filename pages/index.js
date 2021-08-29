import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Oxygen Republic Fitness Gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <Main />

      {/* FOOTER */}
    </div>
  );
}
