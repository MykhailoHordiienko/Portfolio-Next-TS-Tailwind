import React from "react";
import { motion } from "framer-motion";
import useDownloader from "react-use-downloader";

import Image from "next/image";
import CV from "../../public/CV.png";

const SkillComponent = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileDir = "/Mykhailo_Hordiienko_Front-End_Developer.pdf";
  const fileName = "Mykhailo_Hordiienko_Front-End_Developer.pdf";
  return (
    <div className="flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}></motion.div>
      <Image
        className="w-[250px] md:w-[400px]"
        src={CV}
        alt="CV"
      />
      <button
        onClick={() => download(fileDir, fileName)}
        className="contact-btn">
        Download
      </button>
    </div>
  );
};

export default SkillComponent;
