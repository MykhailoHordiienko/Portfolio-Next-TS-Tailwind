import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-5 md:space-y-10 mt-14 md:mt-0">
        <h4 className="md:text-4xl font-semibold text-center">
          I have got just what{" "}
          <span className="text-[#F7AB0A]/40">you need</span>{" "}
        </h4>
        <div className="space-y-2 md:space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">+3 8098 676 52 99</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">gordienkomichael191@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">Kyiv - Ukraine</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;
