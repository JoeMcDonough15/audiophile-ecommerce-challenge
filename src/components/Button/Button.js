import React from "react";
import RightArrow from "../RightArrow/RightArrow";
import "./button.sass";

const Button = (props) => {
  const buttonText = props.buttonText;
  const arrowColor = "#d87d4a";
  return (
    <button className={props.className}>
      <span className="button-text">{buttonText}</span>
      <RightArrow arrowColor={arrowColor} />
    </button>
  );
};

export default Button;
