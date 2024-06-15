import PropTypes from "prop-types";
import React from "react";

export const TypeFiMoonSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M14 8.52667C13.8951 9.66147 13.4692 10.7429 12.7722 11.6445C12.0751 12.5461 11.1357 13.2305 10.0638 13.6177C8.99194 14.0049 7.83198 14.0787 6.71966 13.8307C5.60734 13.5827 4.58866 13.023 3.78281 12.2172C2.97697 11.4113 2.41729 10.3927 2.16927 9.28033C1.92125 8.16801 1.99514 7.00806 2.3823 5.9362C2.76946 4.86434 3.45388 3.92491 4.35547 3.22784C5.25706 2.53076 6.33853 2.10487 7.47333 2C6.80894 2.89884 6.48923 4.0063 6.57235 5.12094C6.65547 6.23559 7.1359 7.28337 7.92626 8.07373C8.71662 8.86409 9.76441 9.34452 10.8791 9.42765C11.9937 9.51077 13.1011 9.19106 14 8.52667V8.52667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiMoonSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
