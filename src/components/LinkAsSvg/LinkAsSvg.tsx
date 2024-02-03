import { NavLink } from "react-router-dom";

interface SvgDetails {
  stroke?: string;
  strokeWidth?: string;
  width: string;
  height: string;
  src: string;
  gElement?: boolean;
  d: string;
}

interface SvgLinkDetails extends SvgDetails {
  internalLink?: boolean;
  linkDestination: string;
}

interface Props {
  className?: string;
  svgDetails: SvgLinkDetails;
}

const LinkAsSvg = ({ className, svgDetails }: Props): JSX.Element => {
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
      {internalLink ? (
        <NavLink to={linkDestination} exact={linkDestination === "/"}>
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
