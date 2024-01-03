import React from "react";
import Button from "../Button/Button";
import "./category-slab.sass";

const CategorySlab = (props) => {
  const { imageSrc, categoryName, thumbnailName, buttonDestination } = props;
  return (
    <div className="category-slab content-slab col">
      <img src={imageSrc} alt="category-image" className={thumbnailName} />
      <p className="category-name">{categoryName}</p>
      <Button
        buttonDestination={buttonDestination}
        buttonText="Shop"
        className="button-with-arrow-icon category-slab-button"
      />
    </div>
  );
};

export default CategorySlab;
