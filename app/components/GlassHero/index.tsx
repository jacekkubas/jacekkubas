"use client";
import React from "react";
import dynamic from "next/dynamic";
import PreviewHero from "./Preview";

const GlassHero = () => {
  const GlassHero = dynamic(() => import("./Scene"), {
    ssr: false,
    loading: () => <PreviewHero />,
  });

  return <GlassHero />;
};

export default GlassHero;
