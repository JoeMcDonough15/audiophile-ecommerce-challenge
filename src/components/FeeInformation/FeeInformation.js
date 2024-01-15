import React from "react";
import "./fee-information.sass";

const FeeInformation = (props) => {
  const { feeName, amountAsString, customPriceColor } = props;
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
