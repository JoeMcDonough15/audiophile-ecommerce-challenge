import React from "react";
import Button from "../Button/Button";
import "./category-slab.sass";

const arrowIconDetails = {
  stroke: "#d87d4a",
  strokeWidth: "2",
  width: "8",
  height: "12",
  src: "http://www.w3.org/2000/svg",
  gElement: false,
  fill: "none",
  fillRule: "evenodd",
  d: "M1.322 1l5 5-5 5",
};

const CategorySlab = (props) => {
  const { imageSrc, categoryName, thumbnailName, buttonDestination } = props;
  return (
    <div className="category-slab content-slab col">
      <img src={imageSrc} alt="category-image" className={thumbnailName} />
      <p className="category-name">{categoryName}</p>
      <Button
        withArrowIcon
        arrowIconDetails={arrowIconDetails}
        buttonDestination={buttonDestination}
        buttonText="Shop"
        className="button-with-arrow-icon category-slab-button"
      />
    </div>
  );
};

export default CategorySlab;
