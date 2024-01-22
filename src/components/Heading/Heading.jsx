import React from "react";

const Headding = ({ props, className }) => {
  return (
    <div>
      <div>
        <h3
          className={`text-5xl font-semibold py-5  text-primary ${className}`}
        >
          {props}
        </h3>
      </div>
    </div>
  );
};

export default Headding;
