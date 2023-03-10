import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import React from "react";

const Header = () => {
  return (
    <header className="sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center">
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://github.com/MykhailoHordiienko"
        />
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://www.linkedin.com/in/mykhailo-hordiienko-111668a8"
        />
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://t.me/MykhailoGordiienko"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          url="mailto:gordienkomichael191@gmail.com"
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <a
          href="mailto:gordienkomichael191@gmail.com"
          className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
