import React from "react";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import CirclePatternSvg from "../CirclePatternSvg/CirclePatternSvg";
import CustomImage from "../CustomImage/CustomImage";
import "./featured-product-one.sass";
import featuredProductImageMobile from "./images/image-speaker-zx9-mobile.png";
import featuredProductImageTablet from "./images/image-speaker-zx9-tablet.png";
import featuredProductImageDesktop from "./images/image-speaker-zx9-desktop.png";

const FeaturedProductOne = (props) => {
  const { featuredProduct } = props;
  return (
    <section>
      <div className="featured-product-one">
        <CirclePatternSvg />
        <div className="featured-product-one-image-and-text">
          <CustomImage
            className="featured-product-one-image-mobile image-mobile"
            src={featuredProductImageMobile}
            alt="featured-product-image-mobile"
          />
          <CustomImage
            className="featured-product-one-image-tablet image-tablet"
            src={featuredProductImageTablet}
            alt="featured-product-image-tablet"
          />
          <CustomImage
            className="featured-product-one-image-desktop image-desktop"
            src={featuredProductImageDesktop}
            alt="featured-product-image-desktop"
          />
          <FeaturedProductInfo
            featuredProduct={featuredProduct}
            customClasses={{
              containerClasses:
                "featured-product-one-info col center-flex-items",
              headerClasses: "featured-product-one-header",
              teaserDescriptionClasses: "featured-product-one-teaser",
              buttonData: { buttonColor: "black", buttonText: "see product" },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductOne;
