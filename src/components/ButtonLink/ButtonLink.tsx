import { NavLink } from "react-router-dom";
import IconAsSvg from "../IconAsSvg/IconAsSvg";
import { SvgDetails } from "../Context/SvgDetailsContext";

interface Props {
  buttonDestination: string;
  buttonText: string;
  withArrowIcon?: boolean;
  arrowIconDetails?: SvgDetails;
  className: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ButtonLink = ({
  buttonDestination,
  buttonText,
  withArrowIcon = false,
  arrowIconDetails,
  className,
  onClick = () => {},
}: Props): JSX.Element => {
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
