"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const Scene = ({
  text,
  reverse,
}: {
  text: string;
  reverse?: boolean | undefined;
}) => {
  return (
    <div className="relative py-24">
      <div
        className={`container mx-auto flex flex-col-reverse justify-center ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="lg:w-1/2 xl:w-1/3 w-full lg:py-24 text-xl leading-relaxed font-bold">
          {text}
        </div>
        <div className="lg:w-1/2 xl:w-2/3 w-full flex items-center">
          <Canvas
            camera={{ fov: 25, zoom: 1.5 }}
            style={{ position: "relative", zIndex: 2, minHeight: "350px" }}
          >
            <Model reverse={reverse} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Scene;
