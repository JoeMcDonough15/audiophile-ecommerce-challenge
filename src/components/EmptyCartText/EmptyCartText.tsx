import "./empty-cart-text.sass";

const EmptyCartText = (): JSX.Element => {
  return (
    <p className="main-container">
      <em className="empty-cart-text">No items in cart. </em>
      <em className="empty-cart-text empty-cart-text-on-checkout">
        Add something to your cart and then return to checkout!
      </em>
    </p>
  );
};

export default EmptyCartText;
