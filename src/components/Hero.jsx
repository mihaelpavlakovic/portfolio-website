import React from "react";
import { Link } from "react-scroll";

import bgImg from "../assets/bgImg.jpg";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-primary flex flex-col justify-between top-0"
    >
      <div className="grid md:grid-cols-2 max-w-[90vw] m-auto">
        <div className="flex flex-col justify-center items-center text-center md:items-start md:text-start w-full px-2 py-8 mt-5 md:mt-0 order-2 md:order-1">
          <p className="text-2xl">Hey there, I am</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Mihael Pavlaković
          </h1>
          <p className="text-2xl">Aspiring web developer and tech junkie</p>
          <Link
            className="py-3 px-6 sm:w-[60%] my-4 text-white border bg-secondary border-secondary
    hover:bg-transparent hover:text-secondary rounded-md cursor-pointer text-center"
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
          >
            Learn About Me
          </Link>
        </div>
        <div className="flex justify-center md:justify-end order-1 md:order-2 mt-5 md:mt-0">
          <img className="w-[50%] rounded-md" src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
