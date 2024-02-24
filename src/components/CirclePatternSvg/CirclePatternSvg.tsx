import { useContext } from "react";
import { AllSvgDetails } from "../Context/SvgDetailsContext";

const CirclePatternSvg = (): JSX.Element => {
  const AllSvgs = useContext(AllSvgDetails);
  const { circlesPattern } = AllSvgs;
  const {
    width,
    height,
    src,
    stroke,
    fill,
    opacity,
    cx,
    cy,
    circleOneRadius,
    circleTwoRadius,
    circleThreeRadius,
  } = circlesPattern;
  return (
    <svg
      className="circle-pattern-svg"
      width={width}
      height={height}
      xmlns={src}
    >
      <g stroke={stroke} fill={fill} fillRule="evenodd" opacity={opacity}>
        <circle cx={cx} cy={cy} r={circleOneRadius} />
        <circle cx={cx} cy={cy} r={circleTwoRadius} />
        <circle cx={cx} cy={cy} r={circleThreeRadius} />
      </g>
    </svg>
  );
};

export default CirclePatternSvg;
