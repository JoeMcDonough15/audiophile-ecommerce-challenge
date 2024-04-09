import { SvgDetails } from "../Context/SvgDetailsContext";
import ShoppingCartBadge from "../ShoppingCartBadge/ShoppingCartBadge";

interface Props {
  className?: string;
  svgDetails: SvgDetails;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  withShoppingCartBadge?: boolean;
}

const IconAsSvg = ({
  className = "",
  withShoppingCartBadge = false,
  svgDetails,
  onClick = () => {},
}: Props): JSX.Element => {
  const { width, height, src, stroke, gElement, strokeWidth, d } = svgDetails;

  return (
    <div className={className} onClick={onClick}>
      {withShoppingCartBadge && <ShoppingCartBadge />}
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
