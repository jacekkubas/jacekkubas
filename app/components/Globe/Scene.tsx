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
        className={`container mx-auto flex justify-center ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="w-1/3 py-24 text-xl leading-relaxed">{text}</div>
        <div className="w-2/3">
          <Canvas
            camera={{ fov: 25, zoom: 1.5 }}
            style={{ position: "relative", zIndex: 2 }}
          >
            <Model reverse={reverse} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Scene;
