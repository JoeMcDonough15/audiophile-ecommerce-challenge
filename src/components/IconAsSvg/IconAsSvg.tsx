import React from "react";

interface SvgDetails {
  id: number;
  slug: string;
  stroke?: string;
  strokeWidth?: string;
  internalLink?: boolean;
  linkDestination?: string;
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
  svgDetails: SvgDetails;
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
