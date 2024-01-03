import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const LinkAsSvg = (props) => {
  const { className, svgDetails, internalLink, linkDestination } = props;
  const {
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
        <NavLink to={linkDestination}>
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
