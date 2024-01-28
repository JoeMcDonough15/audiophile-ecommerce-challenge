import React from "react";
import { NavLink } from "react-router-dom";
import IconAsSvg from "../IconAsSvg/IconAsSvg";

interface SvgDetails {
  id: number;
  slug: string;
  stroke?: string;
  strokeWidth?: string;
  internalLink?: boolean;
  linkDestination?: string;
  width: string;
  height: string;
  src: string;
  gElement: boolean;
  fill: string;
  fillRule: string;
  d: string;
}

interface Props {
  buttonDestination?: string;
  buttonText: string;
  withArrowIcon?: boolean;
  arrowIconDetails?: SvgDetails;
  isSubmitButton?: boolean;
  className: string;
}

const Button = (props: Props) => {
  const {
    buttonDestination,
    buttonText,
    withArrowIcon,
    arrowIconDetails,
    isSubmitButton,
    className,
  } = props;

  return buttonDestination ? (
    <NavLink className="button-container" to={`/${buttonDestination}`}>
      <button className={className}>
        <span className="button-text">{buttonText}</span>
        {withArrowIcon && (
          <IconAsSvg className="right-arrow" svgDetails={arrowIconDetails} />
        )}
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
    </button>
  );
};

export default Button;