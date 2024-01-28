import React from "react";
import ImageSlab from "../ImageSlab/ImageSlab";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./featured-product.sass";

// I think I have to unpack and type annotate all prop data that's being forwarded to FeaturedProductInfo
// right here on this component

interface FeaturedProductImageData {
  mobileImageSrc: string;
  tabletImageSrc: string;
  desktopImageSrc: string;
  imageAltText: string;
  customImageStyles: string;
}

interface Props {
  imageData: FeaturedProductImageData;
}

const FeaturedProduct = (props: Props) => {
  const { imageData } = props;
  const { mobileImageSrc, tabletImageSrc, desktopImageSrc, imageAltText } =
    imageData;
  return (
    <section className="main-container featured-product-container col">
      <div className="featured-product-image-container">
        {" "}
        <ImageSlab
          slabSize="mobile"
          imageData={{ imageSrc: mobileImageSrc, imageAltText: imageAltText }}
        />
        <ImageSlab
          slabSize="tablet"
          imageData={{ imageSrc: tabletImageSrc, imageAltText: imageAltText }}
        />
        <ImageSlab
          slabSize="desktop"
          imageData={{
            imageSrc: desktopImageSrc,
            imageAltText: imageAltText,
          }}
        />
      </div>
      <div className="featured-product-text-container col">
        <FeaturedProductInfo {...props} />
      </div>
    </section>
  );
};

export default FeaturedProduct;
