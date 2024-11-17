"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import "./style.css";

const Scene = () => {
  return (
    <Canvas className="canvas" camera={{ fov: 25 }}>
      <Model />
    </Canvas>
  );
};

export default Scene;
