import { useContext } from "react";
import ItemRow from "../ItemRow/ItemRow";
import FeeInformation from "../FeeInformation/FeeInformation";
import fixPrice from "../../fixPrice";
import "./cart-modal.sass";
import ButtonLink from "../ButtonLink/ButtonLink";
import ButtonRemoveAll from "../ButtonRemoveAll/ButtonRemoveAll";
import { CartContext, ItemToPurchase } from "../Context/CartContext";

interface Props {
  modalIsActive: number;
  handleCartClick: () => void;
}

const CartModal = ({ modalIsActive, handleCartClick }: Props): JSX.Element => {
  let cartModalClasses = "cart-modal col";

  if (modalIsActive === 0 || modalIsActive === 1) {
    cartModalClasses += " hide";
  }

  const {
    // @ts-ignore
    itemsInCart,
    // @ts-ignore
    numItemsInCart,
    // @ts-ignore
    addItemToCart,
    // @ts-ignore,
    removeItemFromCart,
    // @ts-ignore
    removeAllItemsFromCart,
    // @ts-ignore
    calculateTotal,
  } = useContext(CartContext);

  return (
    <section id="cart-modal" className={cartModalClasses}>
      <div className="row cart-top-row">
        <h6 className="black-text">Cart ({numItemsInCart()})</h6>
        <ButtonRemoveAll
          onClick={() => {
            removeAllItemsFromCart();
          }}
        />
      </div>
      <div className="items-in-cart col">
        {itemsInCart.map((itemInCart: ItemToPurchase) => {
          return (
            <ItemRow
              withSpecifyQuantity
              key={itemInCart.product.id}
              itemData={itemInCart}
            />
          );
        })}
      </div>
      <FeeInformation
        feeName="Total"
        amountAsString={fixPrice(calculateTotal())}
      />
      <ButtonLink
        className="button-checkout button-dark-orange"
        buttonText="checkout"
        buttonDestination="/checkout"
        onClick={handleCartClick}
      />
    </section>
  );
};

export default CartModal;
