"use client";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import Word from "./Word";

const BigText = ({ text }: { text: string }) => {
  const paragraph = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paragraph,
    offset: ["start 0.6", "end end"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={paragraph}
      className="py-24 mx-auto font-bold text-6xl flex flex-wrap"
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
  );
};

export default BigText;
