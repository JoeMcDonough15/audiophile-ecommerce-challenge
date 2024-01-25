import React from "react";
import Button from "../Button/Button";
import "./category-slab.sass";
import svgDetails from "../svg-details.json";

const arrowIconDetails = svgDetails.filter((svgDetailObject) => {
  return svgDetailObject.slug === "arrow-icon";
})[0]; // this array will be one item long because only one svgDetailObject will have a slug === 'arrow-icon' --> this is a stupid way of doing this.

interface Props {
  key: number; // do we need to annotate this?
  imageSrc: string;
  categoryName: string;
  thumbnailName: string;
  buttonDestination: string;
}

const CategorySlab = (props: Props) => {
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
