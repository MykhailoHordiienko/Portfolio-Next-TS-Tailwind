import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "../public/Compress.jpg";

type Props = {
  directionLeft?: boolean;
};

const SkillComponent = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ opacity: 0, x: directionLeft ? -150 : 150 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}>
        <Image
          className="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover border border-gray-500 xl:w-32 xl:h-32 filter group-hover:scale-125 transition duration-300 ease-in-out"
          src={img}
          alt="img"
        />
      </motion.div>
    </div>
  );
};

export default SkillComponent;
