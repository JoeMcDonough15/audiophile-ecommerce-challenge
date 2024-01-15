import React from "react";
import CustomImage from "../CustomImage/CustomImage";

const ImageSlab = (props) => {
  const { imageData, slabSize } = props;
  const { className, imageSrc, imageAltText } = imageData;
  return (
    <div className={`content-slab image-${slabSize}`}>
      <CustomImage
        className={className ? `${className}` : null}
        src={imageSrc}
        altText={imageAltText}
      />
    </div>
  );
};

export default ImageSlab;
