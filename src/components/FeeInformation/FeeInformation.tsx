import "./fee-information.sass";

interface Props {
  feeName: string;
  amountAsString: string;
  customPriceColor?: string;
}

const FeeInformation = ({
  feeName,
  amountAsString,
  customPriceColor = "",
}: Props): JSX.Element => {
  return (
    <div className="fee-information row">
      <p className="fee-name">{feeName}</p>
      <p
        className={`product-price ${
          customPriceColor ? customPriceColor : "black-text"
        }`}
      >
        {amountAsString}
      </p>
    </div>
  );
};

export default FeeInformation;
