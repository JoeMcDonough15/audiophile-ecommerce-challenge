import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import data from "../../data.json";
import "./product-page.sass";

const ProductPage = (props) => {
  const { productId, imageData } = props;
  const featuredProduct = data[productId - 1];

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
        imageData={imageData}
      />
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default ProductPage;

// 2. ProductDetails component.  This will be a new component that I make that has a simple header and two paragraphs.
// the content for the header and two paragraphs will come from the data.json.  I need to figure out how to put a space
// between two sections of material that come from the same json property.  Thinking I'll render one paragraph
// that pulls in the Features data from data.json and then uses a <span> element to hard code some space between
// the two paragraph sections.  So: <p className="product-features"> text <span classname="features-gap"> text </p>

// 3. InTheBox component.  This component will use .map() twice.  Once to pull out all the quantities
// that are in the featuredProduct.includes array of objects.  And then again to pull out the name
// of each of those included items.  I'm thinking of making a ul with each pair of quantity/item an li that is
// a flex row.

// 4. Gallery component.  This component should have 3 images all passed in as props.  The first two images
// should be wrapped in a sub container.  So 1 and 2 would be the top level container, and 1a. and 1b. would be
// within 1.  This will make it easier to pop 1 and 2 into a row for tablet and desktop while keeping 1a and 1b as a column

// 5. YouMayAlsoLike.  This component should consist of a top level header, followed by a div.content-slab that renders
// a CustomImage component.  Under that should be a FeaturedProductInfo component that renders only the header and button a la
// FeaturedProductTwo and Three on the Homepage.
