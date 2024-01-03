import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const IconAsSvg = (props) => {
  const { className, svgDetails } = props;
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
    linkDestination,
  } = svgDetails;

  return (
    <NavLink to={linkDestination}>
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
    </NavLink>
  );
};

export default IconAsSvg;
