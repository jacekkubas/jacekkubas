"use client";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import Word from "./Word";

const BigText = ({ text }: { text: string }) => {
  const paragraph = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paragraph,
    offset: ["start 0.6", "end 0.6"],
  });

  const words = text.split(" ");

  return (
    <section id="about">
      <p
        ref={paragraph}
        className="md:py-24 mx-auto text-4xl flex flex-wrap md:text-6xl"
        style={{
          lineHeight: 1.15,
        }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={i}
              text={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        })}
      </p>
    </section>
  );
};

export default BigText;
