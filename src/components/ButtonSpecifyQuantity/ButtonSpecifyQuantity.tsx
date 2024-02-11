interface Props {
  buttonText: string;
  onClick?: () => void;
}

const ButtonSpecifyQuantity = ({ buttonText, onClick }: Props) => {
  return (
    <button className="specify-quantity-button" onClick={onClick}>
      <span className="button-text">{buttonText}</span>
    </button>
  );
};

export default ButtonSpecifyQuantity;
// this button should take in an onClick handler as a prop because
// on the ProductPage, it will merely update the local state of Quantity,
// but on the CartModal, it will actually interact with the CartContext.
// So the button will function differently in different places.
// The onClick prop is optional for now because I didn't write it yet, but it will be
// a required prop.
