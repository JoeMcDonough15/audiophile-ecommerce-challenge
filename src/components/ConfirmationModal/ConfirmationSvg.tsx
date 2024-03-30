import { useContext } from "react";
import { AllSvgDetails } from "../Context/SvgDetailsContext";

const ConfirmationSvg = (): JSX.Element => {
  const AllSvgs = useContext(AllSvgDetails);
  const { orderConfirmation } = AllSvgs;
  const {
    width,
    height,
    src,
    fill,
    circleFill,
    cx,
    cy,
    r,
    stroke,
    strokeWidth,
    d,
  } = orderConfirmation;
  return (
    <svg width={width} height={height} xmlns={src}>
      <g fill={fill} fillRule="evenodd">
        <circle fill={circleFill} cx={cx} cy={cy} r={r}></circle>
        <path stroke={stroke} strokeWidth={strokeWidth} d={d}></path>
      </g>
    </svg>
  );
};

export default ConfirmationSvg;
