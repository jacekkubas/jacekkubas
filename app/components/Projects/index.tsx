"use client";
import React, { useEffect, useRef } from "react";
import useMousePosition from "@/app/utils/useMousePosition";
import "./style.css";
import { motion } from "framer-motion";
import Link from "./Link";

const data = [
  {
    name: "Tutticolori",
    link: "https://tutticolori.pl/",
  },
  {
    name: "Foundry",
    link: "https://foundry.ch",
  },
  {
    name: "Alpian",
    link: "https://www.blog.alpian.com/",
  },
  {
    name: "Globfone",
    link: "https://globfone.com/",
  },
  {
    name: "Golem",
    link: "https://www.golem.network/",
  },
  {
    name: "Legalfinder",
    link: "https://www.legalfinder.lu",
  },
  {
    name: "Datamasters",
    link: "https://datamasters.pl/",
  },
  {
    name: "Imapp",
    link: "https://www.imapp.pl/",
  },
  {
    name: "Future of retail",
    link: "https://futureofretail.jkhost.eu/",
  },
];

const Projects = () => {
  const image = useRef(null);
  const { x, y, target } = useMousePosition();

  useEffect(() => {
    if (target instanceof HTMLElement && target.closest(".image-wrapper")) {
      if (!target.dataset.image) return;
      image.current.classList.add("active");
      image.current.style.backgroundImage = `url('${target.dataset.image}')`;
    } else {
      image.current.classList.remove("active");
    }
  }, [target]);

  return (
    <div className="overflow-hidden">
      <div className="container mx-auto">
        <div className="py-24 image-wrapper">
          {/* <h2 className="text-5xl mb-16">Projects</h2> */}
          <div className="border-t border-gray-500">
            <motion.div
              ref={image}
              className="image"
              animate={{
                y: y - 50,
                x: x + 50,
                position: "fixed",
              }}
              transition={{
                type: "tween",
                ease: "backOut",
              }}
            />
            {data.map((project, i) => {
              return <Link key={i} data={project} image={image} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
