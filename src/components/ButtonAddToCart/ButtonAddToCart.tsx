interface Props {
  onClick?: () => void;
}

const ButtonAddToCart = ({ onClick }: Props) => {
  return (
    <button className="button-dark-orange" onClick={onClick}>
      <span className="button-text">add to cart</span>
    </button>
  );
};

export default ButtonAddToCart;
