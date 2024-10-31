"use client";
import React from "react";
import dynamic from "next/dynamic";
import PreviewHero from "../GlassHero/Preview";

const Projects = () => {
  const ProjectsWrapper = dynamic(() => import("./Projects"), {
    ssr: false,
    loading: () => <PreviewHero />,
  });

  return <ProjectsWrapper />;
};

export default Projects;
