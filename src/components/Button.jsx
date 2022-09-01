import React from "react";

const Button = (props) => {
  return (
    <button
      className="py-3 px-6 my-4 text-white border bg-secondary border-secondary
    hover:bg-transparent hover:text-secondary rounded-md text-center"
    >
      {props.text}
    </button>
  );
};

export default Button;
