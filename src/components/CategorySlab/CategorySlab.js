import React from "react";
import Button from "../Button/Button";
import "./category-slab.sass";

const CategorySlab = (props) => {
  return (
    <div className="category-slab col">
      <img
        src={props.imageName}
        alt="category-image"
        className="thumbnail-image"
      />
      <p className="category-name">{props.categoryName}</p>
      <Button
        buttonText="Shop"
        className="button-with-arrow-icon category-slab-button"
      />
    </div>
  );
};

export default CategorySlab;
