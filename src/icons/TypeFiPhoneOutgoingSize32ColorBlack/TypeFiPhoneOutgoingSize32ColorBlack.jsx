import PropTypes from "prop-types";
import React from "react";

export const TypeFiPhoneOutgoingSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M30.6667 9.33334V1.33334H22.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.3333 10.6667L30.6667 1.33334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M29.3333 22.56V26.56C29.3349 26.9314 29.2588 27.2989 29.11 27.6392C28.9613 27.9794 28.7431 28.2848 28.4695 28.5358C28.1958 28.7869 27.8728 28.978 27.521 29.097C27.1692 29.2159 26.7965 29.2601 26.4267 29.2267C22.3238 28.7809 18.3827 27.3789 14.92 25.1334C11.6985 23.0862 8.96713 20.3549 6.92001 17.1334C4.66665 13.655 3.26434 9.69469 2.82668 5.57336C2.79336 5.20465 2.83718 4.83304 2.95535 4.48219C3.07351 4.13135 3.26344 3.80895 3.51303 3.53552C3.76263 3.2621 4.06642 3.04364 4.40507 2.89406C4.74372 2.74447 5.1098 2.66704 5.48001 2.66669H9.48001C10.1271 2.66033 10.7544 2.88947 11.245 3.3114C11.7357 3.73334 12.0561 4.31929 12.1467 4.96003C12.3155 6.24012 12.6286 7.497 13.08 8.70669C13.2594 9.18393 13.2982 9.70258 13.1919 10.2012C13.0855 10.6998 12.8385 11.1575 12.48 11.52L10.7867 13.2134C12.6848 16.5514 15.4486 19.3153 18.7867 21.2134L20.48 19.52C20.8425 19.1615 21.3002 18.9145 21.7988 18.8082C22.2975 18.7018 22.8161 18.7406 23.2933 18.92C24.503 19.3714 25.7599 19.6845 27.04 19.8534C27.6877 19.9447 28.2792 20.271 28.7021 20.77C29.1249 21.2691 29.3496 21.9061 29.3333 22.56Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiPhoneOutgoingSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
