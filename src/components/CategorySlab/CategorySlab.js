import React from "react";
import Button from "../Button/Button";

const CategorySlab = (props) => {
  return (
    <div className="category-slab">
      <p className="category-name">{props.categoryName}</p>
      <Button buttonText="Shop" className="button-three" />
    </div>
  );
};

export default CategorySlab;
