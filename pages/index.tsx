import type { NextPage } from "next";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

import Head from "next/head";
import Link from "next/link";
import About from "../components/About/About";
import ContactMe from "../components/ContactMe/ContactMe";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0 scrollbar scrollbar-none">
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
      <section
        id="experience"
        className="snap-center">
        <Experience />
      </section>
      <section
        id="resume"
        className="snap-start">
        <Resume />
      </section>
      <section
        id="projects"
        className="snap-start">
        <Projects />
      </section>
      <section className="snap-end">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <ArrowUpCircleIcon className="w-20 ml-auto mr-6 text-[#F7AB0A]/50 animate-pulse hover:text-[#F7AB0A] focus:text-[#F7AB0A]" />
        </footer>
      </Link>
    </div>
  );
};

export default Home;
