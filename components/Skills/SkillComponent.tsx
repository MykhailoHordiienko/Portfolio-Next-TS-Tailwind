import React from "react";
import { motion } from "framer-motion";
import useDownloader from "react-use-downloader";

import Image from "next/image";
import img from "../../public/Compress.jpg";

const SkillComponent = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileDir = "/Mykhailo_Hordiienko_Front-End_Developer.pdf";
  const fileName = "Mykhailo_Hordiienko_Front-End_Developer.pdf";
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}></motion.div>
      <button onClick={() => download(fileDir, fileName)}>Download</button>
    </div>
  );
};

export default SkillComponent;
