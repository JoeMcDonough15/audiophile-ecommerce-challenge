import CustomImage from "../CustomImage/CustomImage";
import { FeaturedProductImageData } from "../FeaturedProduct/FeaturedProduct";
import "./gallery.sass";

interface GalleryImageData {
  first: FeaturedProductImageData;
  second: FeaturedProductImageData;
  third: FeaturedProductImageData;
}

interface Props {
  imageData: GalleryImageData;
}

const Gallery = ({ imageData }: Props): JSX.Element => {
  return (
    <section className="gallery main-container">
      <div className="gallery-section-one col">
        <div className="gallery-image-one-container">
          <CustomImage
            className={"gallery-image gallery-image-one image-mobile"}
            src={imageData.first.mobile}
            altText={"imageObject.imageAltText"}
          />
          <CustomImage
            className={"gallery-image gallery-image-one image-tablet"}
            src={imageData.first.tablet}
            altText={"imageObject.imageAltText"}
          />
          <CustomImage
            className={"gallery-image gallery-image-one image-desktop"}
            src={imageData.first.desktop}
            altText={"imageObject.imageAltText"}
          />
        </div>
        <div className="gallery-image-two-container">
          <CustomImage
            className={"gallery-image gallery-image-one image-mobile"}
            src={imageData.second.mobile}
            altText={"imageObject.imageAltText"}
          />
          <CustomImage
            className={"gallery-image gallery-image-one image-tablet"}
            src={imageData.second.tablet}
            altText={"imageObject.imageAltText"}
          />
          <CustomImage
            className={"gallery-image gallery-image-one image-desktop"}
            src={imageData.second.desktop}
            altText={"imageObject.imageAltText"}
          />
        </div>
      </div>
      <div className="gallery-section-two">
        <div className="gallery-image-three-container">
          <CustomImage
            className={"gallery-image gallery-image-one image-mobile"}
            src={imageData.third.mobile}
            altText={"imageObject.imageAltText"}
          />
          <CustomImage
            className={"gallery-image gallery-image-one image-tablet"}
            src={imageData.third.tablet}
            altText={"imageObject.imageAltText"}
          />
          <CustomImage
            className={"gallery-image gallery-image-one image-desktop"}
            src={imageData.third.desktop}
            altText={"imageObject.imageAltText"}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
