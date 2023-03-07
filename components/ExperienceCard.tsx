import React from "react";
import { motion } from "framer-motion";
import img from "../public/Compress.jpg";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <Image
          className="w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover object-center"
          src={img}
          alt="sum img"
        />
      </motion.div>
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Job Title </h4>
        <p className="text-2xl font-bold mt-1">Company Name</p>
        <div className="flex space-x-2 my-1">
          <Image
            className="w-10 h-10 rounded-full object-cover object-center"
            src={img}
            alt="sum img"
          />
          <Image
            className="w-10 h-10 rounded-full object-cover object-center"
            src={img}
            alt="sum img"
          />
          <Image
            className="w-10 h-10 rounded-full object-cover object-center"
            src={img}
            alt="sum img"
          />
        </div>
        <p className="uppercase py-3 md:py-5 text-gray-300">Work duration</p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Points</li>
          <li>Points</li>
          <li>Points</li>
          <li>Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
