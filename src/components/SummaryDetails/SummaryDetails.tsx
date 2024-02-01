import React from "react";
import ItemInCart from "../ItemInCart/ItemInCart";
import FeeInformation from "../FeeInformation/FeeInformation";
import Button from "../Button/Button";
import "./summary-details.sass";
import fixPrice from "../../fixPrice";
import data from "../../data.json";

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

const selectedProductSlugs: string[] = [
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
]: FeaturedProductObject[] = findSelectedProducts(data, selectedProductSlugs);

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

const subtotal: number = calculateSubtotal(itemsInCart);
const shipping: number = 50;

let key = 0;

const SummaryDetails = (): JSX.Element => {
  return (
    <section className="form-section-two">
      <h6 className="summary-header">Summary</h6>
      <div className="items-in-cart col">
        {itemsInCart.map((itemInCart) => {
          key++;
          return <ItemInCart key={key} itemData={itemInCart} />;
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
