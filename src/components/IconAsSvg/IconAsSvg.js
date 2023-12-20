import React from "react";

const IconAsSvg = (props) => {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      xmlns={props.src}
    >
      {" "}
      {props.gElement} ?{" "}
      <g fill={props.fill} fillRule={props.fillRule}>
        <path
          d={props.d}
          stroke={props.stroke}
          strokeWidth={props.strokeWidth}
        ></path>
      </g>{" "}
      :{" "}
      <path
        d={props.d}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        fillRule={props.fillRule}
      />
    </svg>
  );
};

export default IconAsSvg;
