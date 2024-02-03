import { useState } from "react";
import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import "./specify-quantity.sass";

interface Props {
  quantityAsProp?: number;
}

const SpecifyQuantity = (props: Props): JSX.Element => {
  let openingState: number;
  if (props.quantityAsProp) {
    openingState = props.quantityAsProp;
  } else {
    openingState = 1;
  }

  const [quantity, setQuantity] = useState(openingState);
  return (
    <div className="quantity-container">
      <div className="quantity-buttons-container">
        <Button className="specify-quantity-button" buttonText="-" />
        <Quantity quantity={quantity} />
        <Button className="specify-quantity-button" buttonText="+" />
      </div>
    </div>
  );
};

export default SpecifyQuantity;

// have an optional prop called quantityAsProp
// if that prop is there, initilize the state as that quantityAsProp
// if it's not there, initialize the state as 1
// when setting the state with the setQuantity function, only update state, not the prop
// that was passed in.

// I think I'll have to pass in a prop onClick for Button component in order to call setState
