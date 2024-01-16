import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import IconAsSvg from "../IconAsSvg/IconAsSvg";

const Button = (props) => {
  const {
    buttonDestination,
    buttonText,
    withArrowIcon,
    arrowIconDetails,
    isSubmitButton,
    className,
  } = props;

  return buttonDestination ? (
    <NavLink className="button-container" to={`/${buttonDestination}`} exact>
      <button className={className}>
        <span className="button-text">{buttonText}</span>
        {withArrowIcon ? (
          <IconAsSvg className="right-arrow" svgDetails={arrowIconDetails} />
        ) : null}
      </button>
    </NavLink>
  ) : isSubmitButton ? (
    <button className={`${className} button-submit`}>
      <label>
        {buttonText}
        <input className="input-hidden" type="submit"></input>
      </label>
    </button>
  ) : (
    <button className={className}>
      <span className="button-text">{buttonText}</span>
      {withArrowIcon ? (
        <IconAsSvg className="right-arrow" svgDetails={arrowIconDetails} />
      ) : null}
    </button>
  );
};

export default Button;
