import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { SocialIcon } from "react-social-icons";

import { projects } from "../helpers/projects";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((item, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen">
            <motion.div
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}>
              <Image
                className="w-80 h-80 md:w-[500px] md:h-[500px] xl:w-[800px] xl:h-[800px] object-contain"
                src={item.photo}
                alt="project"
              />
            </motion.div>
            <div className="flex gap-3 items-center justify-center text-xs">
              <p className="opacity-40">Git--{">"}</p>
              <SocialIcon
                fgColor="grey"
                bgColor="transparent"
                url={item.git}
              />
              <p className="opacity-40">Live--{">"}</p>
              <SocialIcon
                fgColor="grey"
                bgColor="transparent"
                url={item.live}
              />
            </div>
            <div>
              <h4 className="text-[#F7AB0A]/50 tracking-[10px]">
                {item.title}
              </h4>
            </div>
            <div>
              <p className="text-center opacity-50 text-xs md:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
