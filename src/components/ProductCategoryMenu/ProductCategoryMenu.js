import React from "react";
import CategorySlab from "../CategorySlab/CategorySlab";
import "./product-category-menu.sass";
import headphonesPreviewImage from "./images/image-category-thumbnail-headphones.png";
import speakerPreviewImage from "./images/image-category-thumbnail-speakers.png";
import earphonesPreviewImage from "./images/image-category-thumbnail-earphones.png";

const ProductCategoryMenu = (props) => {
  const { hideMenu } = props;
  return (
    <nav
      className={
        hideMenu
          ? "main-container product-category-menu col hide"
          : "main-container product-category-menu col"
      }
    >
      <CategorySlab
        key={1}
        categoryName="headphones"
        imageSrc={headphonesPreviewImage}
        thumbnailName="headphones-thumbnail thumbnail-image"
        buttonDestination="headphones"
      />
      <CategorySlab
        key={2}
        categoryName="speakers"
        imageSrc={speakerPreviewImage}
        thumbnailName="speaker-thumbnail thumbnail-image"
        buttonDestination="speakers"
      />
      <CategorySlab
        key={3}
        categoryName="earphones"
        imageSrc={earphonesPreviewImage}
        thumbnailName="earphones-thumbnail thumbnail-image"
        buttonDestination="earphones"
      />
    </nav>
  );
};

export default ProductCategoryMenu;
