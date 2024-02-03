import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./home-feature-two.sass";

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

const HomeFeatureTwo = ({ featuredProduct }: Props): JSX.Element => {
  const { slug } = featuredProduct;
  return (
    <section className="home-feature-two-container">
      <CustomImage
        className="home-feature-two-image image-mobile"
        src={require("./images/image-speaker-zx7-mobile.jpg").default}
        altText="home-feature-two-image-mobile"
      />
      <CustomImage
        className="home-feature-two-image image-tablet"
        src={require("./images/image-speaker-zx7-tablet.jpg").default}
        altText="home-feature-two-image-tablet"
      />
      <CustomImage
        className="home-feature-two-image image-desktop"
        src={require("./images/image-speaker-zx7-desktop.jpg").default}
        altText="home-feature-two-image-desktop"
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
