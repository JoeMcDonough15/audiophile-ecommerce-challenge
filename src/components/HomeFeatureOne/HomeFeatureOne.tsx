import React from "react";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import CirclePatternSvg from "../CirclePatternSvg/CirclePatternSvg";
import CustomImage from "../CustomImage/CustomImage";
import "./home-feature-one.sass";

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

interface Props {
  featuredProduct: FeaturedProductObject;
}

const HomeFeatureOne = ({ featuredProduct }: Props): JSX.Element => {
  const { slug, image } = featuredProduct;
  return (
    <section className="home-feature-one">
      <CirclePatternSvg />
      <div className="home-feature-one-image-and-text">
        <div className="home-feature-one-image-container">
          <CustomImage
            className="home-feature-one-image image-mobile"
            src={require("./images/image-speaker-zx9-mobile.png").default}
            // src={
            //   require("../../assets/product-zx9-speaker/mobile/image-product.jpg")
            //     .default
            // }
            // src={require(`${image.mobile}`).default}
            altText="home-feature-one-image-mobile"
          />
          <CustomImage
            className="home-feature-one-image image-tablet"
            src={require("./images/image-speaker-zx9-tablet.png").default}
            altText="home-feature-one-image-tablet"
          />
          <CustomImage
            className="home-feature-one-image image-desktop"
            src={require("./images/image-speaker-zx9-desktop.png").default}
            altText="home-feature-one-image-desktop"
          />
        </div>
        <FeaturedProductInfo
          featuredProduct={featuredProduct}
          includesProductDescription
          teaserOnly
          isHomeFeatureOne
          buttonData={{
            buttonColor: "black",
            buttonDestination: `product-${slug}`,
          }}
        />
      </div>
    </section>
  );
};

export default HomeFeatureOne;
