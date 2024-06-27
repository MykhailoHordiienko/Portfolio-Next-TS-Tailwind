import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { projects } from '../../helpers/projects';
import Project from './Project';

const Projects = () => {
  const scrollProject = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    const clientVw = document.documentElement.clientWidth;
    scrollProject.current!.scrollLeft =
      scrollProject.current!.scrollLeft + (clientVw > 768 ? 900 : 600);
  };
  const scrollLeft = () => {
    const clientVw = document.documentElement.clientWidth;

    scrollProject.current!.scrollLeft =
      scrollProject.current!.scrollLeft - (clientVw > 768 ? 900 : 600);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <button onClick={scrollLeft} className="absolute -left-10 z-30">
        <ChevronLeftIcon className="text-[#F7AB0A]/20 w-36 animate-ping duration-1000" />
      </button>

      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Pet Projects
      </h3>
      <div
        ref={scrollProject}
        className="relative w-full flex overflow-x-scroll scroll-smooth overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((item, index) => (
          <Project key={index} item={item} />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
      <button className="absolute -right-10 z-30">
        <ChevronRightIcon
          onClick={scrollRight}
          className="text-[#F7AB0A]/20 w-36 animate-ping duration-1000"
        />
      </button>
    </motion.div>
  );
};

export default Projects;
