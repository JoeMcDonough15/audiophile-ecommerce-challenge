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

const ProductPage = (props) => {
  const { productId, imageData } = props;
  const featuredProduct = data[productId - 1];
  const { features, includes, others } = featuredProduct;
  const {
    featuredProductImageData,
    galleryImageData,
    relatedProductsImageData,
  } = imageData;

  return (
    <main className="product-page">
      <Header />
      <div className="main-container">
        <Button
          className={"button-go-back"}
          buttonText="go back"
          buttonDestination=""
        />
      </div>
      <FeaturedProduct
        featuredProduct={featuredProduct}
        isProductPage
        imageData={featuredProductImageData}
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
