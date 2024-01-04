import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import featuredProductImageMobile from "./images/image-speaker-zx7-mobile.jpg";
import featuredProductImageTablet from "./images/image-speaker-zx7-tablet.jpg";
import featuredProductImageDesktop from "./images/image-speaker-zx7-desktop.jpg";
import "./featured-product-two.sass";

const HomeFeatureTwo = (props) => {
  const { featuredProduct } = props;
  const { slug } = featuredProduct;
  return (
    <section className="featured-product-two-container">
      <CustomImage
        className="featured-product-two-image featured-product-two-image-mobile image-mobile"
        src={featuredProductImageMobile}
        alt="featured-product-image-mobile"
      />
      <CustomImage
        className="featured-product-two-image featured-product-two-image-tablet image-tablet"
        src={featuredProductImageTablet}
        alt="featured-product-image-tablet"
      />
      <CustomImage
        className="featured-product-two-image featured-product-two-image-desktop image-desktop"
        src={featuredProductImageDesktop}
        alt="featured-product-image-desktop"
      />
      <FeaturedProductInfo
        featuredProduct={featuredProduct}
        customClasses={{
          containerClasses: "featured-product-two-info col",
          headerClasses: "black-text",
          buttonData: {
            buttonColor: "transparent",
            buttonDestination: `product-${slug}`,
          },
        }}
      />
    </section>
  );
};

export default HomeFeatureTwo;
