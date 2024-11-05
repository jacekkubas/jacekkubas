import React from "react";
// import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-24">
      <div className="md:flex justify-between">
        <div className="w-full">
          <div className="hidden md:block text-2xl font-bold">Jacek Kubas</div>
        </div>
        <div className="w-full flex gap-32 md:gap-40">
          <div>
            <div className="font-bold mb-6">Menu</div>
            <a
              href="#home"
              className="block mb-4 text-gray-300 hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="block mb-4 text-gray-300 hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              className="block mb-4 text-gray-300 hover:text-white"
            >
              Projects
            </a>
          </div>
          <div>
            <div className="font-bold mb-6">Contact</div>
            <a
              href="/Jacek_Kubas-CV.pdf"
              target="_blank"
              className="block mb-4 text-gray-300 hover:text-white"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/jacek-kubas-302932193/"
              target="_blank"
              className="block mb-4 text-gray-300 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
