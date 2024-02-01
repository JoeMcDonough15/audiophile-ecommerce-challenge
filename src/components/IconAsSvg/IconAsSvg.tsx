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
  d: string;
}

interface Props {
  className?: string;
  svgDetails: SvgIconDetails;
}

const IconAsSvg = ({ className, svgDetails }: Props): JSX.Element => {
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
