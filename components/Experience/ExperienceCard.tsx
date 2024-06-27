import { motion } from 'framer-motion';
import ExperiencePoints from './ExperiencePoints';
import Image from 'next/image';
import React from 'react';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

type Props = {
  companyWork: {
    logo: StaticImageData;
    title: string;
    company: string;
    duration: string;
    points?: string[];
  };
};

const ExperienceCard = ({ companyWork }: Props) => {
  const { logo, title, company, duration, points } = companyWork;
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 flex-shrink-0 w-[500px] md:w-full snap-center p-10 bg-[#292929] opacity-60 hover:opacity-100 transition-opacity duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <Image
          className="w-24 h-24 xl:w-[200px] xl:h-[200px] rounded-3xl object-contain object-center bg-transparent"
          src={logo}
          alt="sum img"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light text-center ">{title}</h4>
        <p className="text-xl font-bold mt-1 text-center">{company}</p>
        <p className="uppercase py-3 md:py-5 text-gray-300 text-center">
          {duration}
        </p>

        {points && (
          <ul className="list-disc space-y-2 ml-5 text-sm md:text-lg px-16">
            {points.map((item, index) => (
              <ExperiencePoints key={index} point={item} />
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default ExperienceCard;
