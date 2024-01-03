import React from "react";

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
  } = svgDetails;

  return (
    <div className={className}>
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
    </div>
  );
};

export default IconAsSvg;
