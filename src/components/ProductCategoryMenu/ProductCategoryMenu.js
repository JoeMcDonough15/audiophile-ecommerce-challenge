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
        imageSrc={headphonesPreviewImage}
        thumbnailName="headphones-thumbnail thumbnail-image"
        buttonDestination="headphones"
      />
      <CategorySlab
        categoryName="speakers"
        imageSrc={speakerPreviewImage}
        thumbnailName="speaker-thumbnail thumbnail-image"
        buttonDestination="speakers"
      />
      <CategorySlab
        categoryName="earphones"
        imageSrc={earphonesPreviewImage}
        thumbnailName="earphones-thumbnail thumbnail-image"
        buttonDestination="earphones"
      />
    </section>
  );
};

export default ProductCategoryMenu;
