import { NavLink } from "react-router-dom";
import IconAsSvg from "../IconAsSvg/IconAsSvg";

interface SvgDetails {
  stroke?: string;
  strokeWidth?: string;
  width: string;
  height: string;
  src: string;
  gElement: boolean;
  d: string;
}

interface Props {
  buttonDestination?: string;
  buttonText: string;
  withArrowIcon?: boolean;
  arrowIconDetails?: SvgDetails;
  isSubmitButton?: boolean;
  className: string;
  onClick?: () => void;
}

const Button = (props: Props): JSX.Element => {
  const {
    buttonDestination,
    buttonText,
    withArrowIcon,
    arrowIconDetails,
    isSubmitButton,
    className,
    onClick,
  } = props;

  return buttonDestination ? (
    <NavLink
      className="button-container"
      to={buttonDestination}
      onClick={onClick}
    >
      <button className={className}>
        <span className="button-text">{buttonText}</span>
        {withArrowIcon && arrowIconDetails && (
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
