import { useContext } from "react";
import CustomImage from "../CustomImage/CustomImage";
import HeadingAndButton from "../HeadingAndButton/HeadingAndButton";
import "./home-feature-two.sass";
import PageNotFound from "../../pages/PageNotFound";
import { ProductsContext } from "../Context/ProductsContext";
import { ROUTE_PATHS } from "../constants";

interface Props {
  productSlug: string;
}

const HomeFeatureTwo = ({ productSlug }: Props): JSX.Element => {
  const { allProducts, findProduct } = useContext(ProductsContext);
  const featuredProduct = findProduct(allProducts, productSlug);

  if (!featuredProduct) {
    return <PageNotFound />;
  }

  const { name, allImageData } = featuredProduct;

  const { homepageImageData } = allImageData;

  if (!homepageImageData) {
    return <>Item not found</>;
  }

  const { mobile, tablet, desktop, imageAltText } = homepageImageData;

  return (
    <section className="home-feature-two-container">
      <CustomImage
        className="home-feature-two-image image-mobile"
        src={mobile}
        altText={imageAltText}
      />
      <CustomImage
        className="home-feature-two-image image-tablet"
        src={tablet}
        altText={imageAltText}
      />
      <CustomImage
        className="home-feature-two-image image-desktop"
        src={desktop}
        altText={imageAltText}
      />
      <HeadingAndButton
        productName={name}
        isHomeFeatureTwo
        buttonData={{
          buttonColor: "transparent",
          buttonDestination: `/${ROUTE_PATHS.PRODUCT}/${productSlug}`,
        }}
      />
    </section>
  );
};

export default HomeFeatureTwo;
