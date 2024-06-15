import PropTypes from "prop-types";
import React from "react";

export const TypeFiGitPullRequestSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M4 6V14" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M8.66666 4H10.6667C11.0203 4 11.3594 4.14048 11.6095 4.39052C11.8595 4.64057 12 4.97971 12 5.33333V10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiGitPullRequestSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
