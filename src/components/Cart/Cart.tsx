import { useContext } from "react";
import Button from "../Button/Button";
import ItemRow from "../ItemRow/ItemRow";
import FeeInformation from "../FeeInformation/FeeInformation";
import fixPrice from "../../fixPrice";
import {
  FeaturedProductContext,
  FeaturedProductObject,
  findFeaturedProduct,
} from "../App";
import "./cart.sass";

export interface ItemInCart {
  quantity: number;
  product: FeaturedProductObject;
}

// // These slugs will be passed in as props eventually

const selectedProductSlugs = [
  "xx99-mark-two-headphones",
  "xx59-headphones",
  "yx1-earphones",
  "zx9-speaker",
  "zx7-speaker",
  "xx99-mark-one-headphones",
];

// // Put the products in the cart with a hard-coded quantity property and hard-coded image data

const Cart = (): JSX.Element => {
  const allProducts = useContext(FeaturedProductContext);
  const findSelectedProducts = (productSlugs: string[]) => {
    const selectedProducts: FeaturedProductObject[] = [];
    productSlugs.forEach((productSlug: string) => {
      //@ts-ignore
      selectedProducts.push(findFeaturedProduct(allProducts, productSlug));
    });
    return selectedProducts;
  };

  const [
    selectedProductOne,
    selectedProductTwo,
    selectedProductThree,
  ]: FeaturedProductObject[] = findSelectedProducts(selectedProductSlugs);
  const itemsInCart = [
    {
      quantity: 1,
      product: selectedProductOne,
    },
    {
      quantity: 2,
      product: selectedProductTwo,
    },
    {
      quantity: 1,
      product: selectedProductThree,
    },
  ];

  const calculateSubtotal = (items: ItemInCart[]) => {
    return items.reduce((total, currentItem) => {
      return (total += currentItem.product.price * currentItem.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal(itemsInCart);
  return (
    <section id="cart-modal" className="cart-modal hide col">
      <div className="row cart-top-row">
        <h6 className="black-text">Cart (3)</h6>
        <Button
          className="button-text-only with-underline"
          buttonText="Remove all"
        />
      </div>
      <div className="items-in-cart col">
        {itemsInCart.map((itemInCart) => {
          return (
            <ItemRow
              withSpecifyQuantity
              key={itemInCart.product.id}
              itemData={itemInCart}
            />
          );
        })}
      </div>
      <FeeInformation feeName="Total" amountAsString={fixPrice(subtotal)} />
      <Button
        className="button-checkout button-dark-orange"
        buttonText="checkout"
        buttonDestination="checkout"
      />
    </section>
  );
};

export default Cart;
