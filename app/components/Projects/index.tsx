"use client";
import React, { useEffect, useRef } from "react";
import useMousePosition from "@/app/utils/useMousePosition";
import "./style.css";
import { motion } from "framer-motion";
import Link from "./Link";
import { data } from "./data";

const Projects = () => {
  const image = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  const removeImage = () => {
    if (!image.current) return;
    image.current.classList.remove("active");
  };

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", removeImage);

    return () => {
      window.removeEventListener("scroll", removeImage);
    };
  }, []);

  if (!data) return null;

  return (
    <section className="overflow-hidden" id="projects">
      <div className="container mx-auto">
        <div
          className="py-24 relative"
          id="image-wrapper"
          onMouseLeave={(e) => {
            e.stopPropagation();
            removeImage();
          }}
        >
          <h2 className="text-5xl mb-16">Selected Works</h2>
          <div className="border-t border-gray-500">
            <motion.div
              ref={image}
              className="image"
              animate={{
                y: y - 100,
                x: x + 80,
                position: "fixed",
              }}
              transition={{
                type: "tween",
                ease: "backOut",
              }}
            />
            {data.map((project, i) => {
              return <Link key={i} data={project} floatingImage={image} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
