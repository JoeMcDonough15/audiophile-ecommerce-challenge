import React from "react";

const RightArrow = (props) => {
  return (
    <svg
      className="right-arrow"
      width="8"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.322 1l5 5-5 5"
        stroke={props.arrowColor}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default RightArrow;
