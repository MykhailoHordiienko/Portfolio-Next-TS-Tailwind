import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mykhailo Hordiienko</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      {/* hero */}
      <section id="hero"></section>
      {/* about */}
      {/* experience */}
      {/* skills */}
      {/* projects */}
      {/* contact me */}
    </div>
  );
};

export default Home;
