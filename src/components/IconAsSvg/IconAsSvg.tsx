import React from "react";

interface SvgIconDetails {
  id: number;
  slug: string;
  stroke?: string;
  strokeWidth?: string;
  width: string;
  height: string;
  src: string;
  gElement: boolean;
  fill: string;
  fillRule: string;
  d: string;
}

interface Props {
  className?: string;
  svgDetails: SvgIconDetails;
}

const IconAsSvg = ({ className, svgDetails }: Props) => {
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
          <g fill={fill}>
            <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
          </g>
        ) : (
          <path d={d} stroke={stroke} strokeWidth={strokeWidth} fill={fill} />
        )}
      </svg>
    </div>
  );
};

export default IconAsSvg;
