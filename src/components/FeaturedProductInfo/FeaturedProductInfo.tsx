import Button from "../Button/Button";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./featured-product-info.sass";
import fixPrice from "../../fixPrice";
import { findFeaturedProducts } from "../../pages/Homepage/Homepage";
import { FeaturedProductContext } from "../App";
import { useContext } from "react";

interface ButtonData {
  buttonColor: string;
  buttonDestination?: string;
}

interface Props {
  isProductPage?: boolean;
  isCategoryPage?: boolean;
  isHeroSection?: boolean;
  isHomeFeatureOne?: boolean;
  teaserOnly?: boolean;
  buttonData: ButtonData;
}

const FeaturedProductInfo = (props: Props): JSX.Element => {
  const {
    isProductPage,
    isCategoryPage,
    isHeroSection,
    isHomeFeatureOne,
    teaserOnly,
    buttonData,
  } = props;

  const featuredProducts = useContext(FeaturedProductContext);

  console.log(featuredProducts);

  // const { name, teaserDescription, description, price, isNewProduct }

  const { buttonColor, buttonDestination } = buttonData;
  return <div></div>;
  // return (
  //   <div>
  //     {isProductPage ? (
  //       <div className={"featured-product-info col product-page-info"}>
  //         {isNewProduct && (
  //           <p className={"overline dark-orange-text"}>New Product</p>
  //         )}
  //         <h1
  //           className={
  //             "small-featured-product-header black-text product-page-header"
  //           }
  //         >
  //           {name}
  //         </h1>
  //         <p className={"product-page-description"}>{description}</p>
  //         <p className="product-price black-text">{`${fixPrice(price)}`}</p>
  //         <div className="purchase-buttons row">
  //           {" "}
  //           {/* <SpecifyQuantity />
  //           <Button
  //             buttonText="Add to cart"
  //             className={`button-${buttonColor}`}
  //           /> */}
  //         </div>
  //       </div>
  //     ) : (
  //       <div
  //         className={
  //           isHeroSection
  //             ? "featured-product-info col featured-product-hero-info"
  //             : isHomeFeatureOne
  //             ? "featured-product-info col home-feature-one-info"
  //             : "featured-product-info col"
  //         }
  //       >
  //         {isNewProduct && (
  //           <p
  //             className={
  //               isHeroSection
  //                 ? "overline new-product-grey-text"
  //                 : isHomeFeatureOne
  //                 ? "hide overline"
  //                 : isCategoryPage
  //                 ? "dark-orange-text overline"
  //                 : "overline"
  //             }
  //           >
  //             New Product
  //           </p>
  //         )}

  //         <h1
  //           className={
  //             isHeroSection
  //               ? "white-text featured-product-hero-header"
  //               : isHomeFeatureOne
  //               ? "home-feature-one-header white-text"
  //               : "small-featured-product-header black-text category-page-featured-product-header"
  //           }
  //         >
  //           {name}
  //         </h1>
  //         <p
  //           className={
  //             isHeroSection
  //               ? "featured-product-description-hero"
  //               : isHomeFeatureOne
  //               ? "home-feature-one-description light-grey-text"
  //               : "category-page-featured-product-description"
  //           }
  //         >
  //           {teaserOnly ? teaserDescription : description}
  //         </p>
  //         <Button
  //           buttonText="see product"
  //           className={`button-${buttonColor}`}
  //           buttonDestination={buttonDestination}
  //         />
  //       </div>
  //     )}
  //   </div>
  // );
};
export default FeaturedProductInfo;
