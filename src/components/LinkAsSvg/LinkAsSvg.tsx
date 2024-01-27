import React from "react";
import { NavLink } from "react-router-dom";

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
  className?: string;
  svgDetails: SvgDetails;
}

const LinkAsSvg = ({ className, svgDetails }: Props) => {
  const {
    internalLink,
    linkDestination,
    width,
    height,
    src,
    stroke,
    fill,
    fillRule,
    gElement,
    strokeWidth,
    d,
  } = svgDetails;

  return (
    <div className={className}>
      {internalLink ? (
        <NavLink to={linkDestination} exact={linkDestination === "/"}>
          <svg width={width} height={height} xmlns={src}>
            {gElement ? (
              <g fill={fill} fillRule={fillRule}>
                <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
              </g>
            ) : (
              <path
                d={d}
                stroke={stroke}
                strokeWidth={strokeWidth}
                fill={fill}
                fillRule={fillRule}
              />
            )}
          </svg>
        </NavLink>
      ) : (
        <a href={linkDestination}>
          {" "}
          <svg className={className} width={width} height={height} xmlns={src}>
            {gElement ? (
              <g fill={fill} fillRule={fillRule}>
                <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
              </g>
            ) : (
              <path
                d={d}
                stroke={stroke}
                strokeWidth={strokeWidth}
                fill={fill}
                fillRule={fillRule}
              />
            )}
          </svg>
        </a>
      )}
    </div>
  );
};

export default LinkAsSvg;
