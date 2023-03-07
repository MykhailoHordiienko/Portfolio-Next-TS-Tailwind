import Image from "next/image";
import React from "react";
import { projects } from "../helpers/helpers";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((item, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen">
            <Image
              className="w-80 h-80 md:w-[500px] md:h-[500px] xl:w-[800px] xl:h-[800px] object-contain"
              src={item.photo}
              alt="project"
            />
            <div>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
