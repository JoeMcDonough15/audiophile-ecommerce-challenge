import React from "react";
import Button from "../Button/Button";
import ItemInCart from "../ItemInCart/ItemInCart";
import FeeInformation from "../FeeInformation/FeeInformation";
import data from "../../data.json";
import markTwoImage from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx59Image from "../../assets/product-xx59-headphones/mobile/image-product.jpg";
import yxOneImage from "../../assets/product-yx1-earphones/mobile/image-product.jpg";
import markOneImage from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import zx7Image from "../../assets/product-zx7-speaker/mobile/image-product.jpg";
import zx9Image from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import fixPrice from "../../fixPrice";
import "./cart.sass";

// Hard coding it to temporarily grab products from json to match design.  This will all come from state eventually.

const selectedProductSlugs = [
  "xx99-mark-two-headphones",
  "xx59-headphones",
  "yx1-earphones",
  "zx9-speaker",
  "zx7-speaker",
  "xx99-mark-one-headphones",
];

const findSelectedProducts = (productList, productSlugs) => {
  const selectedProducts = [];
  productSlugs.forEach((productSlug) => {
    productList.forEach((productObject) => {
      if (productObject.slug === productSlug) {
        selectedProducts.push(productObject);
      }
    });
  });
  return selectedProducts;
};

const [
  selectedProductOne,
  selectedProductTwo,
  selectedProductThree,
  selectedProductFour,
] = findSelectedProducts(data, selectedProductSlugs);

// All product images
const allProductImages = {
  markOneImageData: {
    imageSrc: markOneImage,
    imageAltText: "mark-one-headphones-image",
  },

  markTwoImageData: {
    imageSrc: markTwoImage,
    imageAltText: "mark-two-headphones-image",
  },

  xxFiveNineImageData: {
    imageSrc: xx59Image,
    imageAltText: "xx59-headphones-image",
  },

  yxOneImageData: {
    imageSrc: yxOneImage,
    imageAltText: "yx-1-earphones-image",
  },

  zxSevenImageData: {
    imageSrc: zx7Image,
    imageAltText: "zx7-speaker-image",
  },
  zxNineImageData: {
    imageSrc: zx9Image,
    imageAltText: "zx9-speaker-image",
  },
};

// Put the products in the cart with a hard-coded quantity property and hard-coded image data

const itemsInCart = [
  {
    quantity: 1,
    product: selectedProductOne,
    imageData: allProductImages.markTwoImageData,
  },
  {
    quantity: 2,
    product: selectedProductTwo,
    imageData: allProductImages.xxFiveNineImageData,
  },
  {
    quantity: 1,
    product: selectedProductThree,
    imageData: allProductImages.yxOneImageData,
  },
  {
    quantity: 1,
    product: selectedProductFour,
    imageData: allProductImages.zxNineImageData,
  },
];

const calculateSubtotal = (items) => {
  return items.reduce((total, currentItem) => {
    return (total += currentItem.product.price * currentItem.quantity);
  }, 0);
};

const subtotal = calculateSubtotal(itemsInCart);

let key = 0;

const Cart = () => {
  return (
    <section id="cart-modal" className="cart-modal hide col">
      <div className="row cart-top-row">
        <h6>Cart (3)</h6>
        <Button
          className="button-text-only with-underline"
          buttonText="Remove all"
        />
      </div>
      <div className="items-in-cart col">
        {itemsInCart.map((itemInCart) => {
          key++;
          return (
            <ItemInCart
              withSpecifyQuantity
              key={key}
              itemData={itemInCart}
              quantity={itemInCart.quantity}
            />
          );
        })}
        <FeeInformation
          key={1}
          feeName="Total"
          amountAsString={fixPrice(subtotal)}
        />
        <Button
          className="button-checkout button-dark-orange"
          buttonText="checkout"
          buttonDestination="checkout"
        />
      </div>
    </section>
  );
  // a row with two items 1) CART header followed by (numOfItemsInCart)  2) "Remove all" button (very similar to go back button)
  //
  //
  // then custom number of rows, based on how many different items are in the cart.
  // each row contains 1) a small square image of the product, then 2) a column containing product name and formatted price per unit
  // then 3) that same quantity selector inside SpecifyQuantity ( -  1  + )
  //
  //
  // below all that is a row containing 1) the word Total and 2) the number reflecting total price
  //
  //
  // Finally a checkout button with dark-orange background and white text
  //
  //
  // This Cart component renders when the cart SVG icon is tapped or clicked (since it exists at all screen sizes)
  // When it is open, the main container on the current page should get a blur effect.
  //
  //
  //
  // Question: what happens if either the cart or mobile-menu is open and the other is tapped?  I think
  // the one opened should automatically close and the next one tapped should open.  This problem should
  // only exist at mobile and tablet, since those are the sizes that contain a mobile-menu.
};

export default Cart;
