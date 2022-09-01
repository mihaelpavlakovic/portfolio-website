import React from "react";

import aboutMe from "../assets/aboutMe.svg";
import { aboutMeText } from "../constants";

const About = () => {
  return (
    <div
      name="about"
      className="max-w-[1280px] h-full lg:h-[75vh] mx-auto bg-primary grid md:grid-cols-2 justify-items-center items-center"
    >
      <div className="flex justify-center order-1 md:order-2">
        <img
          className="w-[60%] md:w-[70%] rounded-md"
          src={aboutMe}
          alt="About me"
        />
      </div>
      <div className="flex flex-col justify-center md:items-start text-center md:text-start px-5 mt-5 order-2 md:order-1">
        <h2 className="py-3 text-3xl md:text-7xl font-bold">
          {aboutMeText.title}
        </h2>
        <p className="text-lg md:text-xl pt-5">{aboutMeText.paragraph1}</p>
        <p className="text-lg md:text-xl pt-5">
          My love for coding began in high school and since then has only grown
          day by day. Part of my journey you can follow on my Instagram page
          &nbsp;
          <a
            href="https://www.instagram.com/mihaelcodes/"
            target="_blank"
            rel="noreferrer"
            className="text-secondary underline"
          >
            Mihael Codes
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
