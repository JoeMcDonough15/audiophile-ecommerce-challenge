import "./fee-information.sass";

interface Props {
  feeName: string;
  amountAsString: string;
  customPriceColor?: null | string;
}

const FeeInformation = ({
  feeName,
  amountAsString,
  customPriceColor = null,
}: Props): JSX.Element => {
  return (
    <div className="fee-information row">
      <p className="fee-name">{feeName}</p>
      <p className={`product-price ${customPriceColor ?? "black-text"}`}>
        {amountAsString}
      </p>
    </div>
  );
};

export default FeeInformation;
