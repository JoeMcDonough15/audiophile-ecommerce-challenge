import React from "react";
import CustomImage from "../CustomImage/CustomImage";

interface ImageData {
  imageSrc: string;
  imageAltText: string;
  className?: string;
}

interface Props {
  imageData: ImageData;
  slabSize: string;
}

const ImageSlab = ({ imageData, slabSize }: Props): JSX.Element => {
  const { className, imageSrc, imageAltText } = imageData;
  return (
    <div className={`content-slab image-${slabSize}`}>
      <CustomImage
        className={className && `${className}`}
        src={imageSrc}
        altText={imageAltText}
      />
    </div>
  );
};

export default ImageSlab;
