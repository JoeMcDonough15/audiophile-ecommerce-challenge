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

// const IconAsSvg = (props) => {
//   return (
//     <svg
//       className={props.className}
//       width={props.width}
//       height={props.height}
//       xmlns={props.src}
//     >
//       {" "}
//       {props.gElement} ?{" "}
//       <g fill={props.fill} fillRule={props.fillRule}>
//         <path
//           d={props.d}
//           stroke={props.stroke}
//           strokeWidth={props.strokeWidth}
//         ></path>
//       </g>{" "}
//       :{" "}
//       <path
//         d={props.d}
//         stroke={props.stroke}
//         strokeWidth={props.strokeWidth}
//         fill={props.fill}
//         fillRule={props.fillRule}
//       />
//     </svg>
//   );
// };
