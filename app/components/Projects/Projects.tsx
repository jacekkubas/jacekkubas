"use client";
import React, { useEffect, useRef } from "react";
import useMousePosition from "@/app/utils/useMousePosition";
import "./style.css";
import { motion } from "framer-motion";
import Link from "./Link";

const data = [
  // {
  //   name: "Holiday Pirates",
  //   description:
  //     "Travel search platform for millions of enthusiasts, explorers, and holiday makers",
  //   link: "https://www.holidaypirates.com/",
  // },
  {
    name: "Kewpie",
    description: "Japan’s No.1 mayonnaise, crafted in Europe.",
    link: "https://kewpie-europe.com/",
  },
  {
    name: "Tutticolori",
    description: "It's a good day for Italian pizza.",
    link: "https://tutticolori.pl/",
  },
  {
    name: "Foundry",
    description:
      "Creative agency from Zuirch, building leading brands in DACH region.",
    link: "https://foundry.ch",
  },
  // {
  //   name: "Alpian",
  //   description: "The first Swiss digital private bank.",
  //   link: "https://www.blog.alpian.com/",
  // },
  {
    name: "Yabimo",
    description:
      "Leading the world of innovation in the energy and construction industries.",
    link: "https://yabimo.com/",
  },
  {
    name: "Globfone",
    description:
      "Telecommunication services for free to users across the globe",
    link: "https://globfone.com/",
  },
  {
    name: "Golem",
    description:
      "Decentralized platform where everyone can share each other's computing power.",
    link: "https://www.golem.network/",
  },
  {
    name: "Legalfinder",
    description: "Free, easy-to-use way of searching for a legal professional.",
    link: "https://www.legalfinder.lu",
  },
  {
    name: "Datamasters",
    description:
      "A team of experts with experience in building an e-commerce business.",
    link: "https://datamasters.pl/",
  },
  {
    name: "Imapp",
    description:
      "Security, transparency, automation, and efficiency through decentralized technologies.",
    link: "https://www.imapp.pl/",
  },
  {
    name: "Future of retail",
    description:
      "Create full transparency between connected partners to ensure the monetary and logistical flow.",
    link: "https://futureofretail.jkhost.eu/",
  },
];

const Projects = () => {
  const image = useRef(document.createElement("div"));
  const { x, y, target } = useMousePosition();

  useEffect(() => {
    if (target instanceof HTMLElement && target.closest("#image-wrapper")) {
      if (!target.dataset.image) return;
      image.current.classList.add("active");
      image.current.style.backgroundImage = `url('${target.dataset.image}')`;
    } else {
      image.current.classList.remove("active");
    }
  }, [target, image]);

  return (
    <section className="overflow-hidden" id="projects">
      <div className="container mx-auto">
        <div className="py-24 relative" id="image-wrapper">
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
              return <Link key={i} data={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
