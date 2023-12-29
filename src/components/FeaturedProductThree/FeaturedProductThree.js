import React from "react";
import "./featured-product-three.sass";
import CustomImage from "../CustomImage/CustomImage";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import featuredProductImageMobile from "./images/image-earphones-yx1-mobile.jpg";
import featuredProductImageTablet from "./images/image-earphones-yx1-tablet.jpg";
import featuredProductImageDesktop from "./images/image-earphones-yx1-desktop.jpg";

const FeaturedProductThree = (props) => {
  const { featuredProduct } = props;
  return (
    <section className="featured-product-three-container">
      <div className="featured-product-three-image-container">
        <CustomImage
          className="featured-product-three-image featured-product-three-image-mobile image-mobile"
          src={featuredProductImageMobile}
          alt="featured-product-three-image-mobile"
        />
        <CustomImage
          className="featured-product-three-image featured-product-three-image-tablet image-tablet"
          src={featuredProductImageTablet}
          alt="featured-product-three-image-tablet"
        />
        <CustomImage
          className="featured-product-three-image featured-product-three-image-desktop image-desktop"
          src={featuredProductImageDesktop}
          alt="featured-product-three-image-desktop"
        />
      </div>
      <div className="featured-product-three-text-container content-slab">
        <FeaturedProductInfo
          featuredProduct={featuredProduct}
          customHeaderText="YX1 earphones"
          customClasses={{
            containerClasses: "featured-product-three-info col",
            headerClasses: "featured-product-three-header",
            buttonData: {
              buttonColor: "transparent",
              buttonText: "see product",
            },
          }}
        />
      </div>
    </section>
  );
};

export default FeaturedProductThree;
