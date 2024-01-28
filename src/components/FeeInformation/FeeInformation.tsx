import React from "react";
import "./fee-information.sass";

interface Props {
  feeName: string;
  amountAsString: string;
  customPriceColor?: string;
}

const FeeInformation = ({
  feeName,
  amountAsString,
  customPriceColor,
}: Props) => {
  return (
    <div className="fee-information row">
      <p className="fee-name">{feeName}</p>
      <p
        className={
          customPriceColor
            ? `product-price ${customPriceColor}`
            : "product-price black-text"
        }
      >
        {amountAsString}
      </p>
    </div>
  );
};

export default FeeInformation;
