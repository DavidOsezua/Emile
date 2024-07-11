import React from "react";

const ProgressBar = () => {
  return (
    <span>
      <svg
        width="392"
        height="9"
        viewBox="0 0 392 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.504883" width="392" height="8" rx="4" fill="#32363C" />
        <rect
          x="0.25"
          y="0.754883"
          width="391.5"
          height="7.5"
          rx="3.75"
          stroke="#555555"
          stroke-opacity="0.75"
          stroke-width="0.5"
        />
        <rect
          y="0.504883"
          width="129.388"
          height="8"
          rx="4"
          fill="url(#paint0_linear_2_751)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_751"
            x1="0"
            y1="4.50488"
            x2="129.388"
            y2="4.50488"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFEA7C" />
            <stop offset="0.5" stop-color="#FE881C" />
            <stop offset="1" stop-color="#ED5F00" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

export default ProgressBar;
