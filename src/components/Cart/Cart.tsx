import React from "react";
import Button from "../Button/Button";
import ItemInCart from "../ItemInCart/ItemInCart";
import FeeInformation from "../FeeInformation/FeeInformation";
import data from "../../data.json";
import fixPrice from "../../fixPrice";
import "./cart.sass";

interface FeaturedProductObject {
  id: number;
  slug: string;
  name: string;
  abbreviatedName: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  categoryImage: { mobile: string; tablet: string; desktop: string };
  isNewProduct: boolean;
  price: number;
  description: string;
  teaserDescription?: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

// Hard coding it to temporarily grab products from json to match design.  This will all come from state eventually.

const selectedProductSlugs = [
  "xx99-mark-two-headphones",
  "xx59-headphones",
  "yx1-earphones",
  "zx9-speaker",
  "zx7-speaker",
  "xx99-mark-one-headphones",
];

const findSelectedProducts = (
  productList: FeaturedProductObject[],
  productSlugs: string[]
) => {
  const selectedProducts: FeaturedProductObject[] = [];
  productSlugs.forEach((productSlug: string) => {
    productList.forEach((productObject: FeaturedProductObject) => {
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
    imageSrc: require("../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"),
    imageAltText: "mark-one-headphones-image",
  },

  markTwoImageData: {
    imageSrc: require("../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"),
    imageAltText: "mark-two-headphones-image",
  },

  xxFiveNineImageData: {
    imageSrc: require("../../assets/product-xx59-headphones/mobile/image-product.jpg"),
    imageAltText: "xx59-headphones-image",
  },

  yxOneImageData: {
    imageSrc: require("../../assets/product-yx1-earphones/mobile/image-product.jpg"),
    imageAltText: "yx-1-earphones-image",
  },

  zxSevenImageData: {
    imageSrc: require("../../assets/product-zx7-speaker/mobile/image-product.jpg"),
    imageAltText: "zx7-speaker-image",
  },
  zxNineImageData: {
    imageSrc: require("../../assets/product-zx9-speaker/mobile/image-product.jpg"),
    imageAltText: "zx9-speaker-image",
  },
};

// Put the products in the cart with a hard-coded quantity property and hard-coded image data

interface ItemInCart {
  quantity: number;
  product: FeaturedProductObject;
  imageData: string;
}

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

// I'll need to make a new interface for items based on itemsInCart
const calculateSubtotal = (items: ItemInCart[]) => {
  return items.reduce((total, currentItem) => {
    return (total += currentItem.product.price * currentItem.quantity);
  }, 0);
};

const subtotal = calculateSubtotal(itemsInCart);

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
          return (
            <ItemInCart
              withSpecifyQuantity
              key={itemInCart.product.slug}
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
};

export default Cart;
