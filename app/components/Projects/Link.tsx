import React, { useRef, useEffect } from "react";
import useMousePosition from "@/app/utils/useMousePosition";

const Link = ({
  data,
}: // image,
{
  data: {
    link: string;
    name: string;
  };
  // image: React.MutableRefObject<null>;
}) => {
  const link = useRef(null);
  const { target } = useMousePosition();

  // useEffect(() => {
  //   if (!target.dataset.image) return;

  //   if (target instanceof HTMLElement && target == link.current) {
  //     link.current.classList.add("active");
  //   } else {
  //     if (target.current == image) return;
  //     link.current.classList.remove("active");
  //   }
  // }, [target]);

  return (
    <a
      // ref={link}
      className="image-link px-6 py-12 text-3xl border-gray-500 border-b block"
      href={data.link}
      target="_blank"
      data-image={`/projects/${data.name.replace(/ /g, "")}.jpg`}
    >
      <span>{data.name}</span>
    </a>
  );
};

export default Link;
