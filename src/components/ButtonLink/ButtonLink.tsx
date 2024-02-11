import { NavLink } from "react-router-dom";
import IconAsSvg, { SvgDetails } from "../IconAsSvg/IconAsSvg";

interface Props {
  buttonDestination: string;
  buttonText: string;
  withArrowIcon?: boolean;
  arrowIconDetails?: SvgDetails;
  className: string;
  onClick?: () => void;
}

const ButtonLink = (props: Props): JSX.Element => {
  const {
    buttonDestination,
    buttonText,
    withArrowIcon,
    arrowIconDetails,
    className,
    onClick,
  } = props;

  return (
    <NavLink to={buttonDestination} onClick={onClick}>
      <button className={className}>
        <span className="button-text">{buttonText}</span>
        {withArrowIcon && arrowIconDetails && (
          <IconAsSvg className="right-arrow" svgDetails={arrowIconDetails} />
        )}
      </button>
    </NavLink>
  );
};

export default ButtonLink;
