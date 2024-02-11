import { useContext, useState } from "react";
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

// export interface ItemInCart {
//   quantity: number;
//   product: FeaturedProductObject;
// }

// // These slugs will be passed in as props eventually

// const selectedProductSlugs = [
//   "xx99-mark-two-headphones",
//   "xx59-headphones",
//   "yx1-earphones",
//   "zx9-speaker",
//   "zx7-speaker",
//   "xx99-mark-one-headphones",
// ];

// const allProducts = useContext(FeaturedProductContext);
// const findSelectedProducts = (productSlugs: string[]) => {
//   const selectedProducts: FeaturedProductObject[] = [];
//   productSlugs.forEach((productSlug: string) => {
//     //@ts-ignore
//     selectedProducts.push(findFeaturedProduct(allProducts, productSlug));
//   });
//   return selectedProducts;
// };

// const [
//   selectedProductOne,
//   selectedProductTwo,
//   selectedProductThree,
// ]: FeaturedProductObject[] = findSelectedProducts(selectedProductSlugs);
// const itemsInCart = [
//   {
//     quantity: 1,
//     product: selectedProductOne,
//   },
//   {
//     quantity: 2,
//     product: selectedProductTwo,
//   },
//   {
//     quantity: 1,
//     product: selectedProductThree,
//   },
// ];

// const calculateSubtotal = (items: ItemInCart[]) => {
//   return items.reduce((total, currentItem) => {
//     return (total += currentItem.product.price * currentItem.quantity);
//   }, 0);
// };
// const subtotal = calculateSubtotal(itemsInCart);
