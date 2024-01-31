import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import featuredProductImageMobile from "./images/image-speaker-zx7-mobile.jpg";
import featuredProductImageTablet from "./images/image-speaker-zx7-tablet.jpg";
import featuredProductImageDesktop from "./images/image-speaker-zx7-desktop.jpg";
import "./home-feature-two.sass";

const HomeFeatureTwo = (props) => {
  const { featuredProduct } = props;
  const { slug } = featuredProduct;
  return (
    <section className="home-feature-two-container">
      <CustomImage
        className="home-feature-two-image image-mobile"
        src={featuredProductImageMobile}
        alt="home-feature-two-image-mobile"
      />
      <CustomImage
        className="home-feature-two-image image-tablet"
        src={featuredProductImageTablet}
        alt="home-feature-two-image-tablet"
      />
      <CustomImage
        className="home-feature-two-image image-desktop"
        src={featuredProductImageDesktop}
        alt="home-feature-two-image-desktop"
      />
      <FeaturedProductInfo
        featuredProduct={featuredProduct}
        isHomeFeatureTwo
        buttonData={{
          buttonColor: "transparent",
          buttonDestination: `product-${slug}`,
        }}
      />
    </section>
  );
};

export default HomeFeatureTwo;
