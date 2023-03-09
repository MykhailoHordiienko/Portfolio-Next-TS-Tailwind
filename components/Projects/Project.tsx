import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

type Props = {
  item: {
    photo: StaticImageData;
    title: string;
    description: string;
    git: string;
    live: string;
  };
};

const Project = ({ item }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen">
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
        <Link href={item.live}>
          <Image
            className="w-80 h-80 md:w-[500px] md:h-[500px] xl:w-[800px] xl:h-[800px] object-contain"
            src={item.photo}
            alt="project"
          />
        </Link>
      </motion.div>
      <div>
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url={item.git}
        />
      </div>
      <div>
        <h4 className="text-[#F7AB0A]/50 tracking-[10px]">{item.title}</h4>
      </div>
      <div>
        <p className="text-center opacity-50 text-xs md:text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Project;
