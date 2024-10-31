"use client";
import React from "react";
import dynamic from "next/dynamic";
import PreviewHero from "../GlassHero/Preview";

const Globe = ({ text, reverse }: { text: string; reverse?: boolean }) => {
  const GlobeWrapper = dynamic(() => import("./Scene"), {
    ssr: false,
    loading: () => <PreviewHero />,
  });

  return <GlobeWrapper text={text} reverse={reverse} />;
};

export default Globe;
