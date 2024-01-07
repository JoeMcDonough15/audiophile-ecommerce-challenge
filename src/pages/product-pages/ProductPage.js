import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import InTheBox from "../../components/InTheBox/InTheBox";
import Gallery from "../../components/Gallery/Gallery";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import data from "../../data.json";
import "./product-page.sass";

const ProductPage = (props) => {
  const { productId, imageData } = props;
  const featuredProduct = data[productId - 1];
  const { features, includes } = featuredProduct;
  const { featuredProductImageData, galleryImageData } = imageData;

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
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default ProductPage;

// 5. YouMayAlsoLike.  This component should consist of a top level header, followed by a div.content-slab that renders
// a CustomImage component.  Under that should be a FeaturedProductInfo component that renders only the header and button a la
// FeaturedProductTwo and Three on the Homepage.
