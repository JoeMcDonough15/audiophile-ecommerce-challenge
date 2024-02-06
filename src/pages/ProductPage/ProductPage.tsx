import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import InTheBox from "../../components/InTheBox/InTheBox";
import Gallery from "../../components/Gallery/Gallery";
import YouMayAlsoLike from "../../components/YouMayAlsoLike/YouMayAlsoLike";
import "./product-page.sass";
import { useContext } from "react";
import { findFeaturedProduct } from "../../components/FeaturedProductInfo/FeaturedProductInfo";
import { FeaturedProductContext } from "../../components/App";
import PageNotFound from "../PageNotFound";
import { useParams } from "react-router";

// interface ProductImageData {
//   featuredProductImageData: {
//     mobileImageSrc: string;
//     tabletImageSrc: string;
//     desktopImageSrc: string;
//     imageAltText: string;
//     customImageStyles: string;
//   };
//   galleryImageData: {
//     galleryImageOneData: {
//       id: number;
//       imageSrc: string;
//       imageAltText: string;
//       imageSize: string;
//     }[];
//     galleryImageTwoData: {
//       id: number;
//       imageSrc: string;
//       imageAltText: string;
//       imageSize: string;
//     }[];
//     galleryImageThreeData: {
//       id: number;
//       imageSrc: string;
//       imageAltText: string;
//       imageSize: string;
//     }[];
//   };
//   relatedProductsImageData: {
//     id: number;
//     imageSrc: string;
//     imageAltText: string;
//     imageSize: string;
//   }[][];
// }

const ProductPage = () => {
  const { productName: productSlug } = useParams<{
    productName: string;
  }>();
  const allProducts = useContext(FeaturedProductContext);

  const pageProduct = findFeaturedProduct(allProducts, productSlug);
  if (!pageProduct) {
    return <PageNotFound />;
  }

  const { features, includes, others } = pageProduct;

  return (
    <>
      <Banner />
      <main className="product-page">
        <div className="main-container">
          <Button
            className={"button-text-only"}
            buttonText="go back"
            buttonDestination=""
          />
        </div>
        <FeaturedProduct
          productSlug={productSlug}
          isProductPage
          imageData={pageProduct.image}
          buttonData={{ buttonColor: "dark-orange" }}
        />
        {/* <SpecifyQuantity />
          <Button buttonText="Add to cart" className={`button-${buttonColor}`} /> */}
        <section className="product-details-and-accessories main-container">
          <ProductDetails detailsText={features} />
          <InTheBox productIncludes={includes} />
        </section>
        <Gallery imageData={pageProduct.gallery} />
        {/* <YouMayAlsoLike
          relatedProductsImages={relatedProductsImageData}
          relatedProducts={others}
        /> */}
      </main>
    </>
  );
};

export default ProductPage;
