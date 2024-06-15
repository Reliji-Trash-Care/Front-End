import PropTypes from "prop-types";
import React from "react";

export const TypeFiMapPinSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11155)">
        <path
          d="M14 6.66666C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66666C2 5.07536 2.63214 3.54923 3.75736 2.42402C4.88258 1.2988 6.4087 0.666656 8 0.666656C9.5913 0.666656 11.1174 1.2988 12.2426 2.42402C13.3679 3.54923 14 5.07536 14 6.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8 8.66666C9.10457 8.66666 10 7.77123 10 6.66666C10 5.56209 9.10457 4.66666 8 4.66666C6.89543 4.66666 6 5.56209 6 6.66666C6 7.77123 6.89543 8.66666 8 8.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11155">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiMapPinSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
