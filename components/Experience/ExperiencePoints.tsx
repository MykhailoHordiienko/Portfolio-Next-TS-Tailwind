import React from "react";

type Props = {
  point: string;
};

const ExperiencePoints = ({ point }: Props) => {
  const findWord = point.split(", ");
  let googling;

  if (findWord.includes("Googling")) {
    googling = findWord.pop();
  }
  const visibleText = findWord.join(", ");

  return (
    <li>
      {visibleText}
      {googling && ","}
      {googling && (
        <span className="text-[#F7AB0A] font-bold text-base md:text-xl tracking-[3px]">
          {" "}
          {googling}
        </span>
      )}
    </li>
  );
};

export default ExperiencePoints;
