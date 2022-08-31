import React, { useState } from "react";
import { Link } from "react-scroll";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="flex justify-center mt-5">
      <div className="w-[90vw] h-[55px] md:h-[80px] z-10 bg-secondary text-white fixed drop-shadow-md rounded-md">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex cursor-pointer"
          >
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Portfolio.</h1>
          </Link>
          <div className="hidden md:flex pr-4">
            <ul className="hidden md:flex">
              <li className="hover:text-black">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="hover:text-black">
                <Link to="about" smooth={true} offset={-100} duration={500}>
                  About
                </Link>
              </li>
              <li className="hover:text-black">
                <Link to="stack" smooth={true} offset={-80} duration={500}>
                  Stack
                </Link>
              </li>
              <li className="hover:text-black">
                <Link to="projects" smooth={true} offset={-100} duration={500}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-black">
                <Link to="contact" smooth={true} offset={-50} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="md:hidden mr-4 cursor-pointer hover:text-black"
            onClick={handleClick}
          >
            {!nav ? (
              <Bars3Icon className="w-5" />
            ) : (
              <XMarkIcon className="w-5" />
            )}
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <ul
            className={
              !nav ? "hidden" : "absolute bg-secondary w-full px-8 rounded-md"
            }
          >
            <li className="border-b-2 border-zinc-300 w-full hover:text-black">
              <Link
                onClick={handleClose}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full hover:text-black">
              <Link
                onClick={handleClose}
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full hover:text-black">
              <Link
                onClick={handleClose}
                to="stack"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Stack
              </Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full hover:text-black">
              <Link
                onClick={handleClose}
                to="projects"
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="hover:text-black">
              <Link
                onClick={handleClose}
                to="contact"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
