import { useContext } from "react";
import { FeaturedProductContext } from "../App";
import CustomImage from "../CustomImage/CustomImage";
import { findFeaturedProduct } from "../FeaturedProductInfo/FeaturedProductInfo";
import HeadingAndButton from "../HeadingAndButton/HeadingAndButton";
import "./home-feature-two.sass";

interface Props {
  productSlug: string;
}

const HomeFeatureTwo = ({ productSlug }: Props): JSX.Element => {
  const allProducts = useContext(FeaturedProductContext);
  const featuredProduct = findFeaturedProduct(allProducts, productSlug);

  if (!featuredProduct) {
    return <div></div>;
  }

  const { name } = featuredProduct;
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
      <HeadingAndButton
        productName={name}
        isHomeFeatureTwo
        buttonData={{
          buttonColor: "transparent",
          buttonDestination: `product-${productSlug}`,
        }}
      />
    </section>
  );
};

export default HomeFeatureTwo;
