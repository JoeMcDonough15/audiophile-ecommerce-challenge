import React from "react";
import "./featured-product-three.sass";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";

const FeaturedProductThree = (props) => {
  const { featuredProduct } = props;
  const { slug } = featuredProduct;
  return (
    <section className="featured-product-three-container">
      <div className="featured-product-three-image-container"></div>
      <div className="featured-product-three-text-container content-slab">
        <FeaturedProductInfo
          featuredProduct={featuredProduct}
          customHeaderText="YX1 earphones"
          customClasses={{
            containerClasses: "featured-product-three-info col",
            headerClasses: "black-text",
            buttonData: {
              buttonColor: "transparent",
              buttonDestination: `product-${slug}`,
            },
          }}
        />
      </div>
    </section>
  );
};

export default FeaturedProductThree;
