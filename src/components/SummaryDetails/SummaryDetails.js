import React from "react";
import ItemInCart from "../ItemInCart/ItemInCart";
import FeeInformation from "../FeeInformation/FeeInformation";
import Button from "../Button/Button";
import "./summary-details.sass";
import fixPrice from "../../fixPrice";
import data from "../../data.json";
import markTwoImage from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx59Image from "../../assets/product-xx59-headphones/mobile/image-product.jpg";
import yxOneImage from "../../assets/product-yx1-earphones/mobile/image-product.jpg";
import markOneImage from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import zx7Image from "../../assets/product-zx7-speaker/mobile/image-product.jpg";
import zx9Image from "../../assets/product-zx9-speaker/mobile/image-product.jpg";

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

const [selectedProductOne, selectedProductTwo, selectedProductThree] =
  findSelectedProducts(data, selectedProductSlugs);

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
];

const calculateSubtotal = (items) => {
  return items.reduce((total, currentItem) => {
    return (total += currentItem.product.price * currentItem.quantity);
  }, 0);
};

const subtotal = calculateSubtotal(itemsInCart);
const shipping = 50;

let key = 0;

const SummaryDetails = (props) => {
  return (
    <section className="form-section-two">
      <h6 className="summary-header">Summary</h6>
      <div className="items-in-cart col">
        {itemsInCart.map((itemInCart) => {
          key++;
          return (
            <ItemInCart
              key={key}
              itemData={itemInCart}
              quantity={itemInCart.quantity}
            />
          );
        })}
      </div>
      <div className="fees-container col">
        <FeeInformation
          key={1}
          feeName="Total"
          amountAsString={fixPrice(subtotal)}
        />
        <FeeInformation
          key={2}
          feeName="Shipping"
          amountAsString={fixPrice(shipping)}
        />
        <FeeInformation
          key={3}
          feeName="VAT (included)"
          amountAsString={fixPrice(1079)}
        />
      </div>
      <FeeInformation
        feeName="grand total"
        amountAsString={fixPrice(subtotal + shipping)}
        customPriceColor="dark-orange-text"
      />
      <Button
        isSubmitButton
        className="button-dark-orange"
        buttonText="continue & pay"
      />
    </section>
  );
};

export default SummaryDetails;
