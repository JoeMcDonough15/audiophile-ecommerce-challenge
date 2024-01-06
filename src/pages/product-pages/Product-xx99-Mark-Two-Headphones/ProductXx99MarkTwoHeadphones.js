import React from "react";
import ProductPage from "../ProductPage";
import markTwoMobileImage from "../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import markTwoTabletImage from "../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import markTwoDesktopImage from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";

const imageData = {
  mobileImageSrc: markTwoMobileImage,
  tabletImageSrc: markTwoTabletImage,
  desktopImageSrc: markTwoDesktopImage,
  imageAltText: "mark-two-headphones-image",
  customImageStyles: "product-page-image mark-two-image-width",
};

const ProductXx99MarkTwoHeadphones = () => {
  return <ProductPage productId={4} imageData={imageData} />;
};

export default ProductXx99MarkTwoHeadphones;

//

//

// For styles - Let's make one sass sheet that works for all product-pages, similarly to how we made one
// stylesheet work for all category-pages.  The styles on these pages are the same, with some individual styles
// put on the components that build the page.

{
  /* <main className="product-page product-xx99-mark-two-headphones-page">
      <Header />
      <div className="main-container">
        <Button
          className={"button-go-back"}
          buttonText="go back"
          buttonDestination=""
        />
      </div>
      <FeaturedProduct
        imageData={featureOneImageData}
        featuredProduct={featuredProductOne}
        isProductPage
      />
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </main> */
}
