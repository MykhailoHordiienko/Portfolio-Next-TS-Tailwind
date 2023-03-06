import Image from "next/image";
import aboutImg from "../public/DSC04556.jpg";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        className="-mb-20 md:mb-0 flex-shrink-0"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}>
        <Image
          className="w-56 rounded-full md:rounded-b-xl md:rounded-t-xl object-cover md:w-64 xl:w-[500px]"
          src={aboutImg}
          alt="owner img"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="text-[#F7AB0A]/40">little</span> background
        </h4>
        <p>
          Hi! I am a Junior Full Stack Developer. Looking for an opportunity to
          start my new career in the most amazing company! I love teamwork and
          know how to interact with different people. I am punctual, devoted to
          my work and my teammates. Know from real experience what a deadline
          means. I am a person who can be relied upon and who will not run away
          from difficulties. My strength is that I always achieve my goals. I
          have sound knowledge of HTML, CSS, JavaScript, and React. Also, I have
          hands-on experience in following Agile / Scrum methodology when
          working in a team. I am a fast learner, responsible, and ready for
          challenging tasks.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
