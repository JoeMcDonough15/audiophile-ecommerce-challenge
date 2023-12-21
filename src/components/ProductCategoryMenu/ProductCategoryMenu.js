import React from "react";
import CategorySlab from "../CategorySlab/CategorySlab";
import "./product-category-menu.sass";
import earphonesPreviewImage from "./images/image-category-thumbnail-earphones.png";
import headphonesPreviewImage from "./images/image-category-thumbnail-headphones.png";
import speakerPreviewImage from "./images/image-category-thumbnail-speakers.png";

const ProductCategoryMenu = () => {
  return (
    <section className="main-container">
      <CategorySlab />
      <CategorySlab />
      <CategorySlab />
    </section>
  );
};

export default ProductCategoryMenu;
