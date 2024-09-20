import React from "react";
import { MotionValue, useTransform, motion } from "framer-motion";

const Word = ({
  text,
  range,
  progress,
}: {
  text: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative">
      <motion.span className="mr-4 mb-4" style={{ opacity: opacity }}>
        {text}
      </motion.span>
      <span className="absolute top-0 left-0 opacity-40">{text}</span>
    </span>
  );
};

export default Word;
