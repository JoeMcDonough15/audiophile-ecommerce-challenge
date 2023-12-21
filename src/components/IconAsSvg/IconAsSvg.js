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
    <svg className={className} width={width} height={height} xmlns={src}>
      {" "}
      {gElement} ?{" "}
      <g fill={fill} fillRule={fillRule}>
        <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
      </g>{" "}
      :{" "}
      <path
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillRule={fillRule}
      />
    </svg>
  );
};

export default IconAsSvg;
