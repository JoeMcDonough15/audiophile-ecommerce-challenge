import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import InTheBox from "../../components/InTheBox/InTheBox";
import Gallery from "../../components/Gallery/Gallery";
import YouMayAlsoLike from "../../components/YouMayAlsoLike/YouMayAlsoLike";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import data from "../../data.json";
import "./product-page.sass";

interface ProductImageData {
  featuredProductImageData: {
    mobileImageSrc: string;
    tabletImageSrc: string;
    desktopImageSrc: string;
    imageAltText: string;
    customImageStyles: string;
  };
  galleryImageData: {
    galleryImageOneData: {
      id: number;
      imageSrc: string;
      imageAltText: string;
      imageSize: string;
    }[];
    galleryImageTwoData: {
      id: number;
      imageSrc: string;
      imageAltText: string;
      imageSize: string;
    }[];
    galleryImageThreeData: {
      id: number;
      imageSrc: string;
      imageAltText: string;
      imageSize: string;
    }[];
  };
  relatedProductsImageData: [
    {
      id: number;
      imageSrc: string;
      imageAltText: string;
      imageSize: string;
    }[]
  ];
}
interface Props {
  productId: number;
  productImageData: ProductImageData;
}

const ProductPage = ({ productId, productImageData }: Props) => {
  const pageProduct = data[productId - 1];
  const { features, includes, others } = pageProduct;
  const {
    featuredProductImageData,
    galleryImageData,
    relatedProductsImageData,
  } = productImageData;

  return (
    <main className="product-page">
      <Header />
      <div className="main-container">
        <Button
          className={"button-text-only"}
          buttonText="go back"
          buttonDestination=""
        />
      </div>
      <FeaturedProduct
        featuredProduct={pageProduct}
        isProductPage
        imageData={featuredProductImageData}
        customClasses={{
          containerClass: "product-page-info",
          newProductIntroClasses: "dark-orange-text product-page-intro",
          headerClasses:
            "small-featured-product-header black-text product-page-header",
          productDescriptionClasses: "product-page-description",
          buttonData: {
            buttonColor: "dark-orange",
          },
        }}
      />
      <section className="product-details-and-accessories main-container">
        <ProductDetails detailsText={features} />
        <InTheBox productIncludes={includes} />
      </section>
      <Gallery imageData={galleryImageData} />
      <YouMayAlsoLike
        relatedProductsImages={relatedProductsImageData}
        relatedProducts={others}
      />
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default ProductPage;