import PropTypes from "prop-types";
import React from "react";

export const TypeFiPackageSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 6.26667L5 2.80667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M14 10.6667V5.33332C13.9998 5.0995 13.938 4.86986 13.821 4.66743C13.704 4.465 13.5358 4.29689 13.3333 4.17999L8.66667 1.51332C8.46397 1.39629 8.23405 1.33469 8 1.33469C7.76595 1.33469 7.53603 1.39629 7.33333 1.51332L2.66667 4.17999C2.46418 4.29689 2.29599 4.465 2.17897 4.66743C2.06196 4.86986 2.00024 5.0995 2 5.33332V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3325C2.29599 11.535 2.46418 11.7031 2.66667 11.82L7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L13.3333 11.82C13.5358 11.7031 13.704 11.535 13.821 11.3325C13.938 11.1301 13.9998 10.9005 14 10.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.17999 4.63998L7.99999 8.00665L13.82 4.63998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M8 14.72V8" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiPackageSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
