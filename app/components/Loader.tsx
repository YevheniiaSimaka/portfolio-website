import React from "react";

const Loader = () => {
  return (
    <div className="w-[150px] mx-auto my-4 ">
      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="spin"
          cx="400"
          cy="400"
          fill="none"
          r="250"
          stroke-width="31"
          stroke="#817fef"
          stroke-dasharray="998 1400"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Loader;
