import React from "react";
import CategorySlab from "../CategorySlab/CategorySlab";
import "./product-category-menu.sass";
import headphonesPreviewImage from "./images/image-category-thumbnail-headphones.png";
import speakerPreviewImage from "./images/image-category-thumbnail-speakers.png";
import earphonesPreviewImage from "./images/image-category-thumbnail-earphones.png";

const ProductCategoryMenu = () => {
  return (
    <section className="main-container product-category-menu col">
      <CategorySlab
        categoryName="headphones"
        imageName={headphonesPreviewImage}
      />
      <CategorySlab categoryName="speakers" imageName={speakerPreviewImage} />
      <CategorySlab
        categoryName="earphones"
        imageName={earphonesPreviewImage}
      />
    </section>
  );
};

export default ProductCategoryMenu;
