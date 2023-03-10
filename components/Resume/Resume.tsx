import { motion } from "framer-motion";
import React from "react";
import ResumeComponent from "./ResumeComponent";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Resume
      </h3>
      <div className="">
        <ResumeComponent />
      </div>
    </motion.div>
  );
};

export default Resume;
