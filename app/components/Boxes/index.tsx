import React from "react";

const Boxes = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-5xl mb-16">Methodologies</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="p-8 md:p-16 border box-border">
            <svg
              width="100"
              height="100"
              className="animate-[spin_10s_linear_infinite] mx-0 mb-8"
            >
              <path
                d="m5.99999,50l44.00001,-44l44.00001,44l-44.00001,44l-44.00001,-44z"
                className="fill-none stroke-white"
              />
            </svg>
            <h3 className="font-bold mb-4 text-xl">Research</h3>
            <p>
              I study emerging technologies, user behaviors, and best practices
              to create efficient, secure, and user-friendly websites and
              applications that meet modern needs.
            </p>
          </div>
          <div className="p-8 md:p-16 border box-border">
            <svg
              width="100"
              height="100"
              className="animate-[spin_10s_linear_infinite] mx-0 mb-8"
            >
              <path
                d="m3.78835,62.73614l9.15309,-39.60862l37.05847,-17.62752l37.05848,17.62752l9.15326,39.60862l-25.646,31.76386l-41.13149,0l-25.64582,-31.76386z"
                className="fill-none stroke-white"
              />
            </svg>
            <h3 className="font-bold mb-4 text-xl">UI Design</h3>
            <p>
              I focus on creating visually appealing, intuitive interfaces that
              enhance user interaction and improve the overall user experience
              of a website or application.
            </p>
          </div>
          <div className="p-8 md:p-16 border box-border">
            <svg
              width="100"
              height="100"
              className="animate-[spin_10s_linear_infinite] mx-0 mb-8"
            >
              <path
                d="m4,50l8.78522,-27.29226l22.99987,-16.86774l28.42984,0l23.00001,16.86774l8.78507,27.29226l-8.78507,27.29226l-23.00001,16.86774l-28.42984,0l-22.99987,-16.86774l-8.78522,-27.29226z"
                className="fill-none stroke-white"
              />
            </svg>
            <h3 className="font-bold mb-4 text-xl">Web Development</h3>
            <p>
              I approach web development as the process of building, creating,
              and maintaining websites, handling everything from coding and
              design to content management and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
