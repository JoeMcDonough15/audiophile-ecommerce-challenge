import React from "react";
import CategorySlab from "../CategorySlab/CategorySlab";
import "./product-category-menu.sass";
import headphonesPreviewImage from "./images/image-category-thumbnail-headphones.png";
import speakerPreviewImage from "./images/image-category-thumbnail-speakers.png";
import earphonesPreviewImage from "./images/image-category-thumbnail-earphones.png";

const ProductCategoryMenu = () => {
  return (
    <section className="main-container product-category-menu">
      <CategorySlab
        categoryName="headphones"
        imageSrc={headphonesPreviewImage}
        thumbnailName="headphones-thumbnail"
      />
      <CategorySlab
        categoryName="speakers"
        imageSrc={speakerPreviewImage}
        thumbnailName="speaker-thumbnail"
      />
      <CategorySlab
        categoryName="earphones"
        imageSrc={earphonesPreviewImage}
        thumbnailName="earphones-thumbnail"
      />
    </section>
  );
};

export default ProductCategoryMenu;
