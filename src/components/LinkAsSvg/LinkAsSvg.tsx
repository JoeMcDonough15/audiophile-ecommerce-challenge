import { NavLink } from "react-router-dom";
import { SvgDetails } from "../Context/SvgDetailsContext";

interface Props {
  className?: string;
  svgDetails: SvgDetails;
}

const LinkAsSvg = ({ className = "", svgDetails }: Props): JSX.Element => {
  const {
    internalLink,
    linkDestination,
    width,
    height,
    src,
    stroke,
    gElement,
    strokeWidth,
    d,
  } = svgDetails;

  return (
    <div className={className}>
      {linkDestination && internalLink ? (
        <NavLink to={linkDestination}>
          <svg width={width} height={height} xmlns={src}>
            {gElement && stroke && strokeWidth ? (
              <g>
                <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
              </g>
            ) : gElement ? (
              <g>
                <path d={d}></path>
              </g>
            ) : stroke && strokeWidth ? (
              <path d={d} stroke={stroke} strokeWidth={strokeWidth} />
            ) : (
              <path d={d}></path>
            )}
          </svg>
        </NavLink>
      ) : (
        <a href={linkDestination}>
          {" "}
          <svg className={className} width={width} height={height} xmlns={src}>
            {gElement && stroke && strokeWidth ? (
              <g>
                <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
              </g>
            ) : gElement ? (
              <g>
                <path d={d}></path>
              </g>
            ) : stroke && strokeWidth ? (
              <path d={d} stroke={stroke} strokeWidth={strokeWidth} />
            ) : (
              <path d={d}></path>
            )}
          </svg>
        </a>
      )}
    </div>
  );
};

export default LinkAsSvg;
