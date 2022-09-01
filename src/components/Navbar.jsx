import React, { useState } from "react";
import { Link } from "react-scroll";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-full h-[55px] md:h-[80px] z-10 bg-secondary text-white fixed drop-shadow-md rounded-b-md">
      <div className="max-w-[1280px] mx-auto px-5 flex justify-between items-center h-full">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex cursor-pointer hover:text-black"
        >
          <h1 className="text-3xl sm:text-4xl font-bold">Portfolio.</h1>
        </Link>
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="p-5 cursor-pointer hover:text-black"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-100}
              duration={500}
              className="p-5 cursor-pointer hover:text-black"
            >
              About
            </Link>
            <Link
              to="stack"
              smooth={true}
              offset={-80}
              duration={500}
              className="p-5 cursor-pointer hover:text-black"
            >
              Stack
            </Link>
            <Link
              to="projects"
              smooth={true}
              offset={-100}
              duration={500}
              className="p-5 cursor-pointer hover:text-black"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-50}
              duration={500}
              className="p-5 cursor-pointer hover:text-black"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div
          className="md:hidden mr-2 cursor-pointer hover:text-black"
          onClick={handleClick}
        >
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
        </div>
      </div>

      <div className="flex justify-center text-center -mt-1">
        <ul
          className={
            !nav ? "hidden" : "absolute bg-secondary w-full py-2 rounded-b-md"
          }
        >
          <Link
            onClick={handleClose}
            to="home"
            smooth={true}
            duration={500}
            className="p-2 w-full hover:text-black block"
          >
            Home
          </Link>
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            className="p-2 w-full hover:text-black block"
          >
            About
          </Link>
          <Link
            onClick={handleClose}
            to="stack"
            smooth={true}
            offset={-80}
            duration={500}
            className="p-2 w-full hover:text-black block"
          >
            Stack
          </Link>
          <Link
            onClick={handleClose}
            to="projects"
            smooth={true}
            offset={-80}
            duration={500}
            className="p-2 w-full hover:text-black block"
          >
            Projects
          </Link>
          <Link
            onClick={handleClose}
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="p-2 w-full hover:text-black block"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
