import PropTypes from "prop-types";
import React from "react";

export const TypeFiFolderSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.6666 50.6667C58.6666 52.0812 58.1047 53.4377 57.1045 54.4379C56.1044 55.4381 54.7478 56 53.3333 56H10.6666C9.25216 56 7.8956 55.4381 6.89541 54.4379C5.89522 53.4377 5.33331 52.0812 5.33331 50.6667V13.3333C5.33331 11.9188 5.89522 10.5623 6.89541 9.5621C7.8956 8.5619 9.25216 8 10.6666 8H24L29.3333 16H53.3333C54.7478 16 56.1044 16.5619 57.1045 17.5621C58.1047 18.5623 58.6666 19.9188 58.6666 21.3333V50.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFolderSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
