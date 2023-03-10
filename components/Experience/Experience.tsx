import React, { useRef } from "react";
import { motion } from "framer-motion";
import { work } from "../../helpers/work";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  const scrollExp = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    const clientVw = document.documentElement.clientWidth;

    scrollExp.current!.scrollLeft =
      scrollExp.current!.scrollLeft + (clientVw > 768 ? 900 : 400);
  };
  const scrollLeft = () => {
    const clientVw = document.documentElement.clientWidth;

    scrollExp.current!.scrollLeft =
      scrollExp.current!.scrollLeft - (clientVw > 768 ? 900 : 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <button
        onClick={scrollLeft}
        className="absolute -left-10">
        <ChevronLeftIcon className="text-[#F7AB0A]/20 w-36 animate-ping duration-1000" />
      </button>

      <div
        ref={scrollExp}
        className="w-full flex space-x-5 overflow-x-scroll scroll-smooth p-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {work.map((item, index) => (
          <ExperienceCard
            key={index}
            companyWork={item}
          />
        ))}
      </div>

      <button className="absolute -right-10">
        <ChevronRightIcon
          onClick={scrollRight}
          className="text-[#F7AB0A]/20 w-36 animate-ping duration-1000"
        />
      </button>
    </motion.div>
  );
};

export default Experience;
