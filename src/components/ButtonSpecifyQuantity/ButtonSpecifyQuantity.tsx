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
