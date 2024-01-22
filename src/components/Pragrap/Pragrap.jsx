import React from "react";

const Pragrap = ({ props, className }) => {
  return (
    <div>
      <p
        className={`text-secondary text-lg font-normal   text-justify ${className}`}
      >
        {props}
      </p>
    </div>
  );
};

export default Pragrap;
