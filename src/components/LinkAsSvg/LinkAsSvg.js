import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const LinkAsSvg = (props) => {
  const { className, svgDetails, internalLink, linkDestination } = props;
  const { width, height, src, stroke, gElement, strokeWidth, d } = svgDetails;

  return (
    <div className={className}>
      {internalLink ? (
        <NavLink to={linkDestination} exact={linkDestination === "/"}>
          <svg width={width} height={height} xmlns={src}>
            {gElement ? (
              <g>
                <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
              </g>
            ) : (
              <path d={d} stroke={stroke} strokeWidth={strokeWidth} />
            )}
          </svg>
        </NavLink>
      ) : (
        <a href={linkDestination}>
          {" "}
          <svg width={width} height={height} xmlns={src}>
            {gElement ? (
              <g>
                <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
              </g>
            ) : (
              <path d={d} stroke={stroke} strokeWidth={strokeWidth} />
            )}
          </svg>
        </a>
      )}
    </div>
  );
};

export default LinkAsSvg;
