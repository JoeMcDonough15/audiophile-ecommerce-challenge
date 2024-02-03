import React from "react";

interface SvgDetails {
  stroke?: string;
  strokeWidth?: string;
  width: string;
  height: string;
  src: string;
  gElement?: boolean;
  d: string;
}

interface Props {
  className?: string;
  svgDetails: SvgDetails;
}

const IconAsSvg = ({ className, svgDetails }: Props): JSX.Element => {
  const { width, height, src, stroke, gElement, strokeWidth, d } = svgDetails;

  return (
    <div className={className}>
      <svg width={width} height={height} xmlns={src}>
        {gElement && stroke && strokeWidth ? (
          <g>
            <path d={d} stroke={stroke} strokeWidth={strokeWidth}></path>
          </g>
        ) : gElement ? (
          <g>
            <path d={d}></path>
          </g>
        ) : stroke && strokeWidth ? (
          <path d={d} stroke={stroke} strokeWidth={strokeWidth} />
        ) : (
          <path d={d}></path>
        )}
      </svg>
    </div>
  );
};

export default IconAsSvg;
