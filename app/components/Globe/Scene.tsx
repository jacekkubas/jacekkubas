"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import "./style.css";

const Scene = ({ text, reverse }: { text: string; reverse?: boolean }) => {
  return (
    <section className="relative md:py-24">
      <div
        className={`container mx-auto flex flex-col-reverse justify-center ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <p className="lg:w-1/2 xl:w-1/3 w-full lg:py-24 text-xl leading-relaxed">
          {text}
        </p>
        <div className="lg:w-1/2 xl:w-2/3 w-full flex items-center">
          <Canvas camera={{ fov: 25, zoom: 1.5 }} className="canvas-wrapper">
            <Model reverse={reverse} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Scene;
