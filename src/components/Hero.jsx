import React from "react";
import { Link } from "react-scroll";

import bgImg from "../assets/bgImg.jpg";
import { heroText } from "../constants";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      name="home"
      className="max-w-[1280px] h-screen mx-auto bg-primary grid items-center"
    >
      <div className="grid md:grid-cols-2 justify-items-center items-center">
        <div className="flex justify-center">
          <img className="w-[50%] rounded-md" src={bgImg} alt="Person" />
        </div>
        <div className="flex-col justify-center text-center md:text-start px-5 mt-10 md:mt-0">
          <p className="text-lg md:text-xl italic text-gray-600">
            {heroText.beforeHeading}
          </p>
          <h1 className="py-3 text-3xl md:text-7xl font-bold">
            {heroText.title}
          </h1>
          <p className="text-xl md:text-2xl">{heroText.subHeading}</p>
          <Link to="about" smooth={true} offset={-80} duration={500}>
            <Button text="Learn About Me" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
