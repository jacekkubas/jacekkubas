"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMouseOver = (e: React.MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <div className="absolute top-5 left-8 md:top-12 md:left-16 z-10 text-xl md:text-2xl font-bold">
        Jacek Kubas
      </div>
      <div
        className={`hamburger top-6 right-8 md:top-12 md:right-16 ${
          isOpen ? "active" : ""
        }`}
        onClick={handleHamburgerClick}
      >
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu flex backdrop-blur-xl"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-1/2 bg-white opacity-80"
              animate={{
                height: isOpen ? "100%" : 0,
              }}
              transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.3 }}
              initial={{
                height: 0,
              }}
              exit={{ height: 0 }}
            >
              <div className="p-16"></div>
            </motion.div>
            <motion.div
              className="w-1/2 bg-black self-end opacity-80"
              animate={{
                height: isOpen ? "100%" : 0,
              }}
              transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.3 }}
              initial={{
                height: 0,
              }}
              exit={{ height: 0 }}
            >
              <div className="p-16 pt-20 box-border">
                <ul className="text-white text-8xl leading-relaxed text-right">
                  <li>
                    <a
                      className="transition-all"
                      href="#home"
                      onClick={handleClose}
                      onMouseOver={(e) => {
                        handleMouseOver(e);
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all"
                      href="#about"
                      onClick={handleClose}
                      onMouseOver={(e) => {
                        handleMouseOver(e);
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all"
                      href="#projects"
                      onClick={handleClose}
                      onMouseOver={(e) => {
                        handleMouseOver(e);
                      }}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all"
                      href="#contact"
                      onClick={handleClose}
                      onMouseOver={(e) => {
                        handleMouseOver(e);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
