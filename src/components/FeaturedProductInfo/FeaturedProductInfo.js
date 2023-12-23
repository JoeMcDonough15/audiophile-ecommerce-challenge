import React from "react";
import Button from "../Button/Button";
import "./featured-product-info.sass";

const FeaturedProductInfo = (props) => {
  const { featuredProduct, newProduct, buttonColor } = props;
  const { name, teaserDescription } = featuredProduct;
  return (
    <section>
      {newProduct ? (
        <div className="featured-product-info main-container col">
          <p className="overline new-product-intro">New Product</p>
          <h1 className="featured-product-header">{name}</h1>
          <p className="featured-product-teaser">{teaserDescription}</p>
          <Button
            buttonText="See product"
            className={`button-${buttonColor}`}
          />
        </div>
      ) : (
        <div className="featured-product-info main-container col">
          <h1 className="featured-product-header">{name}</h1>
          <p className="featured-product-teaser">{teaserDescription}</p>
          <Button
            buttonText="See product"
            className={`button-${buttonColor}`}
          />
        </div>
      )}
    </section>
  );
};
export default FeaturedProductInfo;
