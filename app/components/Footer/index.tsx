import React from "react";
// import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-24">
      <div className="flex justify-between">
        <div className="w-full">
          {/* <Image
            src="/images/shapes.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          /> */}
        </div>
        <div className="w-full flex gap-40">
          <div>
            <div className="font-bold mb-6">Menu</div>
            <a href="#" className="block mb-4 text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="block mb-4 text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="#" className="block mb-4 text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
          <div>
            <div className="font-bold mb-6">Contact</div>
            <a href="#" className="block mb-4 text-gray-300 hover:text-white">
              Get a Quote
            </a>
            <a href="#" className="block mb-4 text-gray-300 hover:text-white">
              Say Hi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
