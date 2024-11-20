import React from "react";
import "./style.css";
import Image from "next/image";

const Preview = () => {
  return (
    <div className="canvas-wrapper flex items-center justify-center md:h-screen text-9xl text-gray-300 title">
      <Image
        priority
        src="/svg/loading.svg"
        width="88"
        height="88"
        alt="Typescript icon"
      />
    </div>
  );
};

export default Preview;
