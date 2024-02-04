import Button from "../Button/Button";
import "./featured-product-info.sass";
import fixPrice from "../../fixPrice";
import { FeaturedProductContext, FeaturedProductObject } from "../App";
import { useContext } from "react";
import PageNotFound from "../../pages/PageNotFound";

export const findFeaturedProduct = (
  productList: FeaturedProductObject[],
  productSlug: string
) => {
  return productList.find((product) => {
    return product.slug === productSlug;
  });
};

interface ButtonData {
  buttonColor: string;
  buttonDestination?: string;
}

interface Props {
  productSlug: string;
  isProductPage?: boolean;
  isCategoryPage?: boolean;
  isHeroSection?: boolean;
  isHomeFeatureOne?: boolean;
  teaserOnly?: boolean;
  buttonData: ButtonData;
}

const FeaturedProductInfo = (props: Props): JSX.Element => {
  const {
    productSlug,
    isProductPage,
    isCategoryPage,
    isHeroSection,
    isHomeFeatureOne,
    teaserOnly,
    buttonData,
  } = props;

  const allProducts = useContext(FeaturedProductContext);

  const featuredProduct = findFeaturedProduct(allProducts, productSlug);

  if (!featuredProduct) {
    return <PageNotFound />;
  }

  const { name, teaserDescription, description, price, isNewProduct } =
    featuredProduct;

  const { buttonColor, buttonDestination } = buttonData;
  return (
    <div>
      {isProductPage ? (
        <div className={"featured-product-info col product-page-info"}>
          {isNewProduct && (
            <p className={"overline dark-orange-text"}>New Product</p>
          )}
          <h1
            className={
              "small-featured-product-header black-text product-page-header"
            }
          >
            {name}
          </h1>
          <p className={"product-page-description"}>{description}</p>
          <p className="product-price black-text">{`${fixPrice(price)}`}</p>
          <div className="purchase-buttons row">
            {" "}
            {/* <SpecifyQuantity />
            <Button
              buttonText="Add to cart"
              className={`button-${buttonColor}`}
            /> */}
          </div>
        </div>
      ) : (
        <div
          className={
            isHeroSection
              ? "featured-product-info col featured-product-hero-info"
              : isHomeFeatureOne
              ? "featured-product-info col home-feature-one-info"
              : "featured-product-info col"
          }
        >
          {isNewProduct && (
            <p
              className={
                isHeroSection
                  ? "overline new-product-grey-text"
                  : isHomeFeatureOne
                  ? "hide overline"
                  : isCategoryPage
                  ? "dark-orange-text overline"
                  : "overline"
              }
            >
              New Product
            </p>
          )}

          <h1
            className={
              isHeroSection
                ? "white-text featured-product-hero-header"
                : isHomeFeatureOne
                ? "home-feature-one-header white-text"
                : "small-featured-product-header black-text category-page-featured-product-header"
            }
          >
            {name}
          </h1>
          <p
            className={
              isHeroSection
                ? "featured-product-description-hero"
                : isHomeFeatureOne
                ? "home-feature-one-description light-grey-text"
                : "category-page-featured-product-description"
            }
          >
            {teaserOnly ? teaserDescription : description}
          </p>
          <Button
            buttonText="see product"
            className={`button-${buttonColor}`}
            buttonDestination={buttonDestination}
          />
        </div>
      )}
    </div>
  );
};
export default FeaturedProductInfo;
