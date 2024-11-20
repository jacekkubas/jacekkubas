import React from "react";

const Link = ({
  data,
}: {
  data: {
    link: string;
    name: string;
    description: string;
  };
}) => {
  return (
    <a
      className="image-link px-6 py-12 text-3xl border-gray-500 border-b block"
      href={data.link}
      target="_blank"
      data-image={`/projects/${data.name.replace(/ /g, "")}.jpg`}
    >
      <div className="relative">
        <div>{data.name}</div>
        <div className="text-base mt-2 text-gray-500">{data.description}</div>
      </div>
    </a>
  );
};

export default Link;
