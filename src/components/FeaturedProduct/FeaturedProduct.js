import React from "react";
import Button from "../Button/Button";
import "./featured-product.sass";

const FeaturedProduct = (props) => {
  const { featuredProduct } = props;
  return (
    <section className="featured-product main-container col">
      <p className="overline new-product-intro">New Product</p>
      <h1 className="featured-product-header">{featuredProduct.name}</h1>
      <p className="featured-product-teaser">
        {featuredProduct.teaserDescription}
      </p>
      <Button buttonText="See product" className="button-one" />
    </section>
  );
};
export default FeaturedProduct;
