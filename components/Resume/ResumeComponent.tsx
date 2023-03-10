import { motion } from "framer-motion";
import CV from "../../public/CV.png";
import React from "react";
import useDownloader from "react-use-downloader";
import Image from "next/image";

const ResumeComponent = () => {
  const { download } = useDownloader();
  const fileDir = "/Mykhailo_Hordiienko_Front-End_Developer.pdf";
  const fileName = "Mykhailo_Hordiienko_Front-End_Developer.pdf";
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
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
    </motion.div>
  );
};

export default ResumeComponent;
