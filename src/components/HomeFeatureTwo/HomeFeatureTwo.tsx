import { useContext } from "react";
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

  const { name } = featuredProduct;

  return (
    <section className="home-feature-two-container">
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
