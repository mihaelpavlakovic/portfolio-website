import React from "react";

import aboutMe from "../assets/aboutMe.svg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full lg:h-[75vh] bg-primary flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[90vw] m-auto">
        <div className="flex justify-center order-1 md:order-1">
          <img
            className="w-[60%] md:w-[70%] rounded-md"
            src={aboutMe}
            alt="/"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start w-full px-2 py-8 order-2 md:order-2">
          <h2 className="py-3 text-5xl md:text-7xl font-bold">About me</h2>
          <p className="text-xl pt-5 text-justify px-4 md:px-0">
            I am currently working on getting my major in Informatics. Besides
            that, I love to code and spend time around computers.
          </p>
          <p className="text-xl pt-5 text-justify px-4 md:px-0">
            My love for coding began in high school and since then has only
            grown day by day. Part of my journey you can follow on my Instagram
            page &nbsp;
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
    </div>
  );
};

export default About;
