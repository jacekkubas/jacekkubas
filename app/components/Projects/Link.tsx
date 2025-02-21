import { RefObject, MouseEvent } from "react";

const Link = ({
  data,
  floatingImage,
}: {
  data: {
    link: string;
    name: string;
    description: string;
  };
  floatingImage: RefObject<HTMLDivElement>;
}) => {
  const handleMouseOver = (e: MouseEvent) => {
    e.stopPropagation();
    if (!floatingImage.current) return;
    const target = e.target as HTMLElement;
    let targetImage;
    if (target.dataset.image) {
      targetImage = target.dataset.image;
    }
    if (target.closest(".image-link")) {
      const parentTarget = target.closest(".image-link") as HTMLElement;
      targetImage = parentTarget.dataset.image;
    }
    floatingImage.current.classList.add("active");
    floatingImage.current.style.backgroundImage = `url('${targetImage}')`;
  };

  return (
    <a
      className="image-link px-6 py-12 text-3xl border-gray-500 border-b block"
      href={data.link}
      target="_blank"
      data-image={`/projects/${data.name.replace(/ /g, "")}.jpg`}
      onMouseEnter={handleMouseOver}
    >
      <div className="relative">
        <h3>{data.name}</h3>
        <div className="text-base mt-2 text-gray-400">{data.description}</div>
      </div>
    </a>
  );
};

export default Link;
