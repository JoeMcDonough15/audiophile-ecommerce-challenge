const removeAllItemsFromCart = () => {
  return;
};

const ButtonRemoveAll = () => {
  return (
    <button
      className="button-text-only with-underline"
      onClick={removeAllItemsFromCart}
    >
      <span className="button-text">remove all</span>
    </button>
  );
};

export default ButtonRemoveAll;

// on this component the onClick handler can be hard coded because it will always do the
// same thing: clear the cart.  The removeAllItemsFromCart function should be imported from
// CartContext.
