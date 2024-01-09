import React from "react";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import CirclePatternSvg from "../CirclePatternSvg/CirclePatternSvg";
import CustomImage from "../CustomImage/CustomImage";
import featuredProductImageMobile from "./images/image-speaker-zx9-mobile.png";
import featuredProductImageTablet from "./images/image-speaker-zx9-tablet.png";
import featuredProductImageDesktop from "./images/image-speaker-zx9-desktop.png";
import "./home-feature-one.sass";

const HomeFeatureOne = (props) => {
  const { featuredProduct } = props;
  const { slug } = featuredProduct;
  return (
    <section className="home-feature-one">
      <CirclePatternSvg />
      <div className="home-feature-one-image-and-text">
        <div className="home-feature-one-image-container">
          <CustomImage
            className="home-feature-one-image image-mobile"
            src={featuredProductImageMobile}
            alt="home-feature-one-image-mobile"
          />
          <CustomImage
            className="home-feature-one-image image-tablet"
            src={featuredProductImageTablet}
            alt="home-feature-one-image-tablet"
          />
          <CustomImage
            className="home-feature-one-image image-desktop"
            src={featuredProductImageDesktop}
            alt="home-feature-one-image-desktop"
          />
        </div>
        <FeaturedProductInfo
          featuredProduct={featuredProduct}
          includesProductDescription
          teaserOnly
          customClasses={{
            containerClass: "home-feature-one-info",
            newProductIntroClasses: "hide",
            headerClasses: "home-feature-one-header white-text",
            productDescriptionClasses:
              "home-feature-one-description light-grey-text",
            buttonData: {
              buttonColor: "black",
              buttonDestination: `product-${slug}`,
            },
          }}
        />
      </div>
    </section>
  );
};

export default HomeFeatureOne;
