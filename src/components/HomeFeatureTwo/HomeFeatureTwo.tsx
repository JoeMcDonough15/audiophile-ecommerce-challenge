import { useContext } from "react";
import { FeaturedProductContext, findFeaturedProduct } from "../App";
import CustomImage from "../CustomImage/CustomImage";
import HeadingAndButton from "../HeadingAndButton/HeadingAndButton";
import "./home-feature-two.sass";
import PageNotFound from "../../pages/PageNotFound";

interface Props {
  productSlug: string;
}

const HomeFeatureTwo = ({ productSlug }: Props): JSX.Element => {
  const allProducts = useContext(FeaturedProductContext);
  const featuredProduct = findFeaturedProduct(allProducts, productSlug);

  if (!featuredProduct) {
    return <PageNotFound />;
  }

  const { name, homePageImage } = featuredProduct;

  // @ts-ignore
  const { mobile, tablet, desktop, altImageText } = homePageImage;
  return (
    <section className="home-feature-two-container">
      <CustomImage
        className="home-feature-two-image image-mobile"
        src={mobile}
        altText={altImageText}
      />
      <CustomImage
        className="home-feature-two-image image-tablet"
        src={tablet}
        altText={altImageText}
      />
      <CustomImage
        className="home-feature-two-image image-desktop"
        src={desktop}
        altText={altImageText}
      />
      <HeadingAndButton
        productName={name}
        isHomeFeatureTwo
        buttonData={{
          buttonColor: "transparent",
          buttonDestination: `product/${productSlug}`,
        }}
      />
    </section>
  );
};

export default HomeFeatureTwo;
