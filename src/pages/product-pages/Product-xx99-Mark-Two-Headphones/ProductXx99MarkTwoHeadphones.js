import React from "react";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import FeaturedProduct from "../../../components/FeaturedProduct/FeaturedProduct";
import ProductCategoryMenu from "../../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../../components/AboutUs/AboutUs";
import Footer from "../../../components/Footer/Footer";
import data from "../../../data.json";
import markTwoMobileImage from "../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import markTwoTabletImage from "../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import markTwoDesktopImage from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import "../product-pages.sass";

const featuredProductSlugs = ["xx99-mark-two-headphones"];

const findFeaturedProducts = (productList, productSlugs) => {
  const featuredProducts = [];
  productSlugs.forEach((productSlug) => {
    productList.forEach((productObject) => {
      if (productObject.slug === productSlug) {
        featuredProducts.push(productObject);
      }
    });
  });
  return featuredProducts;
};

const [featuredProductOne] = findFeaturedProducts(data, featuredProductSlugs);

const featureOneImageData = {
  mobileImageSrc: markTwoMobileImage,
  tabletImageSrc: markTwoTabletImage,
  desktopImageSrc: markTwoDesktopImage,
  imageAltText: "mark-two-headphones-image",
  customImageStyles: "product-page-image mark-two-image-width",
};

const ProductXx99MarkTwoHeadphones = () => {
  return (
    <main className="product-page product-xx99-mark-two-headphones-page">
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
        newProduct
      />
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default ProductXx99MarkTwoHeadphones;

// 2. ProductFeatures component.  This will be a new component that I make that has a simple header and two paragraphs.
// the content for the header and two paragraphs will come from the data.json.  I need to figure out how to put a space
// between two sections of material that come from the same json property.  Thinking I'll render one paragraph
// that pulls in the Features data from data.json and then uses a <span> element to hard code some space between
// the two paragraph sections.  So: <p className="product-features"> text <span classname="features-gap"> text </p>

// 3. InTheBox component.  This component will use .map() twice.  Once to pull out all the quantities
// that are in the featuredProduct.includes array of objects.  And then again to pull out the name
// of each of those included items.  I'm thinking of making a ul with each pair of quantity/item an li that is
// a flex row.

// 4. gallery component.  This component should have 3 images all passed in as props.  The first two images
// should be wrapped in a sub container.  So 1 and 2 would be the top level container, and 1a. and 1b. would be
// within 1.  This will make it easier to pop 1 and 2 into a row for tablet and desktop while keeping 1a and 1b as a column

// 5. YouMayAlsoLike.  This component should consist of a top level header, followed by a div.content-slab that renders
// a CustomImage component.  Under that should be a FeaturedProductInfo component that renders only the header and button a la
// FeaturedProductTwo and Three on the Homepage.

//

//

// For styles - Let's make one sass sheet that works for all product-pages, similarly to how we made one
// stylesheet work for all category-pages.  The styles on these pages are the same, with some individual styles
// put on the components that build the page.
