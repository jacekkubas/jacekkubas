import React from "react";

const Header = () => {
  return (
    <div className="p-10 text-lg fixed z-10 w-full flex justify-end">
      <ul className="inline-flex gap-5 text-white">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
