import React from "react";
import CategorySlab from "../CategorySlab/CategorySlab";
import "./product-category-menu.sass";

const ProductCategoryMenu = (): JSX.Element => {
  return (
    <nav className={"main-container product-category-menu col"}>
      <CategorySlab
        key={1}
        categoryName="headphones"
        imageSrc={require("./images/image-category-thumbnail-headphones.png")}
        thumbnailName="headphones-thumbnail thumbnail-image"
        buttonDestination="headphones"
      />
      <CategorySlab
        key={2}
        categoryName="speakers"
        imageSrc={require("./images/image-category-thumbnail-speakers.png")}
        thumbnailName="speaker-thumbnail thumbnail-image"
        buttonDestination="speakers"
      />
      <CategorySlab
        key={3}
        categoryName="earphones"
        imageSrc={require("./images/image-category-thumbnail-earphones.png")}
        thumbnailName="earphones-thumbnail thumbnail-image"
        buttonDestination="earphones"
      />
    </nav>
  );
};

export default ProductCategoryMenu;
