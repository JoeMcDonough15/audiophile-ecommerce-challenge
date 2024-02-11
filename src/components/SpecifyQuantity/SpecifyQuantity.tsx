import Quantity from "../Quantity/Quantity";
import "./specify-quantity.sass";
import ButtonSpecifyQuantity from "../ButtonSpecifyQuantity/ButtonSpecifyQuantity";

interface Props {
  quantity: number;
  incrementQuantity?: () => void;
  decrementQuantity?: () => void;
}

const SpecifyQuantity = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props): JSX.Element => {
  return (
    <div className="quantity-container">
      <div className="quantity-buttons-container">
        <ButtonSpecifyQuantity buttonText="-" onClick={decrementQuantity} />
        <Quantity quantity={quantity} />
        <ButtonSpecifyQuantity buttonText="+" onClick={incrementQuantity} />
      </div>
    </div>
  );
};

export default SpecifyQuantity;
