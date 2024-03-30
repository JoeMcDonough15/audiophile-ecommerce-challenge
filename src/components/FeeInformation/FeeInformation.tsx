import "./fee-information.sass";

interface Props {
  feeAsColumn?: boolean;
  feeName: string;
  amountAsString: string;
  customPriceColor?: null | string;
}

const FeeInformation = ({
  feeAsColumn = false,
  feeName,
  amountAsString,
  customPriceColor = null,
}: Props): JSX.Element => {
  return (
    <div className={`fee-information ${feeAsColumn ? "col" : "row"}`}>
      <p className="fee-name">{feeName}</p>
      <p className={`product-price ${customPriceColor ?? "black-text"}`}>
        {amountAsString}
      </p>
    </div>
  );
};

export default FeeInformation;
