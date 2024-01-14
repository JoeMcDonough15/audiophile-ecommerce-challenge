import React from "react";
import CustomImage from "../CustomImage/CustomImage";

const ImageSlab = (props) => {
  const { imageData, deviceSize } = props;
  const { className, imageSrc, imageAltText } = imageData;
  return (
    <div className={`content-slab image-${deviceSize}`}>
      <CustomImage
        className={className ? `${className}` : null}
        src={imageSrc}
        altText={imageAltText}
      />
    </div>
  );
};

export default ImageSlab;
