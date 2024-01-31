import React from "react";

const IconAsSvg = (props) => {
  const { className, svgDetails } = props;
  const { width, height, src, stroke, gElement, strokeWidth, d } = svgDetails;

  return (
    <div className={className}>
      <svg width={width} height={height} xmlns={src}>
        {gElement ? (
          <g>
            <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
          </g>
        ) : (
          <path d={d} stroke={stroke} strokeWidth={strokeWidth} />
        )}
      </svg>
    </div>
  );
};

export default IconAsSvg;
