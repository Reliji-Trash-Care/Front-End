import PropTypes from "prop-types";
import React from "react";

export const TypeFiSmileSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M15 9H15.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9 9H9.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiSmileSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
