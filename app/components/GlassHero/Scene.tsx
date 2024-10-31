"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const Scene = () => {
  return (
    <Canvas
      style={{ backgroundColor: "#000", minHeight: "450px" }}
      camera={{ fov: 25 }}
    >
      <Model />
    </Canvas>
  );
};

export default Scene;
