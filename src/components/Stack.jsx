import React from "react";

import stackImg from "../assets/stack.svg";
import { stackText } from "../constants";

const Stack = () => {
  return (
    <div
      name="stack"
      className="max-w-[1280px] h-full lg:h-[75vh] mx-auto  mt-32 bg-primary grid md:grid-cols-2 justify-items-center items-center"
    >
      <div className="flex justify-center">
        <img
          className="w-[60%] md:w-[70%] rounded-md"
          src={stackImg}
          alt="Coding tools"
        />
      </div>
      <div className="flex-col justify-center px-5 mt-5">
        <h2 className="text-3xl md:text-7xl font-bold py-3 text-center md:text-start">
          {stackText.title}
        </h2>
        <p className="text-lg md:text-xl pt-5 text-center md:text-start">
          {stackText.subHeading}
        </p>
        <ul className="text-lg md:text-xl pt-5 pl-10 md:pl-5">
          <li className="p-2 list-disc">HTML</li>
          <li className="p-2 list-disc">CSS (Bootstrap and Tailwind)</li>
          <li className="p-2 list-disc">JavaScript</li>
          <li className="p-2 list-disc">React.js</li>
          <li className="p-2 list-disc">Git</li>
        </ul>
      </div>
    </div>
  );
};

export default Stack;
