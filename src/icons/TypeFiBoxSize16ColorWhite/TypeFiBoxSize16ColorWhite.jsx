import PropTypes from "prop-types";
import React from "react";

export const TypeFiBoxSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 21.3333V10.6666C27.9995 10.199 27.8761 9.73972 27.6421 9.33485C27.408 8.92999 27.0717 8.59379 26.6667 8.35997L17.3333 3.02664C16.9279 2.79259 16.4681 2.66937 16 2.66937C15.5319 2.66937 15.0721 2.79259 14.6667 3.02664L5.33333 8.35997C4.92835 8.59379 4.59197 8.92999 4.35795 9.33485C4.12392 9.73972 4.00048 10.199 4 10.6666V21.3333C4.00048 21.8009 4.12392 22.2602 4.35795 22.6651C4.59197 23.0699 4.92835 23.4062 5.33333 23.64L14.6667 28.9733C15.0721 29.2074 15.5319 29.3306 16 29.3306C16.4681 29.3306 16.9279 29.2074 17.3333 28.9733L26.6667 23.64C27.0717 23.4062 27.408 23.0699 27.6421 22.6651C27.8761 22.2602 27.9995 21.8009 28 21.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M4.36002 9.28L16 16.0133L27.64 9.28"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M16 29.44V16" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiBoxSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
