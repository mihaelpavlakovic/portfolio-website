import React from "react";

import stackImg from "../assets/stack.svg";

const Stack = () => {
  return (
    <div
      name="stack"
      className="w-full h-full lg:h-[75vh] bg-primary flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[90vw] m-auto">
        <div className="flex justify-center order-1 md:order-1">
          <img
            className="w-[60%] md:w-[70%] rounded-md"
            src={stackImg}
            alt="/"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start w-full px-2 py-8 order-2 md:order-2">
          <h2 className="py-3 text-3xl md:text-7xl font-bold">Stack</h2>
          <p className="text-lg md:text-xl pt-5 text-center md:text-start">
            What's my knowledge in web development?
          </p>
          <ul className="text-lg md:text-xl pt-5 pl-5">
            <li className="p-2 list-disc">HTML</li>
            <li className="p-2 list-disc">CSS (Bootstrap and Tailwind)</li>
            <li className="p-2 list-disc">JavaScript</li>
            <li className="p-2 list-disc">React.js</li>
            <li className="p-2 list-disc">Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stack;
