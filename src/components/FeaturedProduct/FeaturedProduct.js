import React from "react";
import Button from "../Button/Button";
import "./featured-product.sass";

const FeaturedProduct = (props) => {
  console.log("props inside featuredProduct: ", props.featuredProduct);
  return (
    <section className="featured-product main-container col">
      <p className="overline new-product-intro">New Product</p>
      <h1 className="featured-product-header">{props.featuredProduct.name}</h1>
      <p className="featured-product-teaser">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button buttonText="See product" className="button-one" />
    </section>
  );
};
export default FeaturedProduct;
