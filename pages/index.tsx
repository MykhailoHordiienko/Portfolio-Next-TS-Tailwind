import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Mykhailo Hordiienko</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <section
        id="hero"
        className="snap-start">
        <Hero />
      </section>
      <section
        id="about"
        className="snap-center">
        <About />
      </section>
      {/* experience */}
      <section
        id="experience"
        className="snap-center">
        <Experience />
      </section>
      {/* skills */}
      <section
        id="skills"
        className="snap-start">
        <Skills />
      </section>
      {/* projects */}
      <section
        id="projects"
        className="snap-start">
        <Projects />
      </section>
      {/* contact me */}
    </div>
  );
};

export default Home;