import { useContext } from "react";
import ItemRow from "../ItemRow/ItemRow";
import FeeInformation from "../FeeInformation/FeeInformation";
import fixPrice from "../../fixPrice";
import "./cart-modal.sass";
import ButtonLink from "../ButtonLink/ButtonLink";
import ButtonRemoveAll from "../ButtonRemoveAll/ButtonRemoveAll";
import { CartContext, ItemToPurchase } from "../Context/CartContext";
import { ROUTE_PATHS } from "../constants";

interface Props {
  modalIsOpen: boolean;
  handleCartClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const CartModal = ({
  modalIsOpen = false,
  handleCartClick,
}: Props): JSX.Element => {
  let cartModalClasses = "cart-modal col";

  if (!modalIsOpen) {
    cartModalClasses += " hide";
  }

  const {
    itemsInCart,
    numItemsInCart,
    removeAllItemsFromCart,
    calculateSubtotal,
  } = useContext(CartContext);

  return (
    <section id="cart-modal" className={cartModalClasses}>
      {numItemsInCart === 0 ? (
        <h6>
          <em>No items in cart</em>
        </h6>
      ) : (
        <>
          <div className="row cart-top-row">
            <h6 className="black-text">Cart ({numItemsInCart})</h6>
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
            amountAsString={fixPrice(calculateSubtotal())}
          />
          <ButtonLink
            className="button-checkout button-dark-orange"
            buttonText="checkout"
            buttonDestination={`${ROUTE_PATHS.CHECKOUT}`}
            onClick={handleCartClick}
          />
        </>
      )}
    </section>
  );
};

export default CartModal;
