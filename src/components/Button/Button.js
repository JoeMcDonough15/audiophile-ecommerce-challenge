import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import IconAsSvg from "../IconAsSvg/IconAsSvg";
import "./button.sass";

const Button = (props) => {
  const { buttonDestination, buttonText, className } = props;
  const arrowColor = "#d87d4a"; // arrow icon is only for .button-with-arrow-icon
  const arrowIconProps = {
    stroke: arrowColor,
    strokeWidth: "2",
    width: "8",
    height: "12",
    src: "http://www.w3.org/2000/svg",
    gElement: false,
    fill: "none",
    fillRule: "evenodd",
    d: "M1.322 1l5 5-5 5",
  };

  return (
    <NavLink to={`/${buttonDestination}`}>
      <button className={className}>
        <span className="button-text">{buttonText}</span>
        <IconAsSvg className="right-arrow" svgDetails={arrowIconProps} />
      </button>
    </NavLink>
  );
};

export default Button;
