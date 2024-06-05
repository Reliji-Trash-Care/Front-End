import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Profil = ({
  property1,
  className,
  openartImage = "../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-1.png",
  arrowDown = "../../../static/img/arrow-down-2.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[123px] flex items-center rounded-[10px] relative ${
        state.property1 === "variant-2" ? "bg-additional-1" : "bg-primary-2"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] p-[10px] relative">
        <img className="w-[24px] object-cover h-[24px] relative" alt="Openart image" src={openartImage} />
      </div>
      <div className="inline-flex items-center gap-[10px] flex-[0_0_auto] ml-[-6px] p-[10px] justify-center relative">
        <div
          className={`font-body-2-bold w-fit mt-[-1.00px] tracking-[var(--body-2-bold-letter-spacing)] text-[length:var(--body-2-bold-font-size)] [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] text-center whitespace-nowrap leading-[var(--body-2-bold-line-height)] relative ${
            state.property1 === "variant-2" ? "text-primary-2" : "text-primary-1"
          }`}
        >
          Admin
        </div>
      </div>
      <img
        className="w-[24px] ml-[-6px] h-[24px] relative"
        alt="Arrow down"
        src={state.property1 === "variant-2" ? "../../../static/img/arrow-down-2-1.svg" : arrowDown}
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Profil.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  openartImage: PropTypes.string,
  arrowDown: PropTypes.string,
};
