import React from "react";
import IconAsSvg from "../IconAsSvg/IconAsSvg";
import "./button.sass";

const Button = (props) => {
  const buttonText = props.buttonText;
  const arrowColor = "#d87d4a";
  return (
    <button className={props.className}>
      <span className="button-text">{buttonText}</span>
      {/* <IconAsSvg
        className="right-arrow"
        width="8"
        height="12"
        src="http://www.w3.org/2000/svg"
        gElement={false}
        stroke={arrowColor}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        d="M1.322 1l5 5-5 5"
      /> */}
    </button>
  );
};

export default Button;
