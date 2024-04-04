import { ProductImage } from "../Context/ProductsContext";
import CustomImage from "../CustomImage/CustomImage";
import "./gallery.sass";

interface GalleryImageData {
  first: ProductImage;
  second: ProductImage;
  third: ProductImage;
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
            className={"gallery-image image-mobile"}
            src={imageData.first.mobile}
            altText={imageData.first.imageAltText}
          />
          <CustomImage
            className={"gallery-image image-tablet"}
            src={imageData.first.tablet}
            altText={imageData.first.imageAltText}
          />
          <CustomImage
            className={"gallery-image image-desktop"}
            src={imageData.first.desktop}
            altText={imageData.first.imageAltText}
          />
        </div>
        <div className="gallery-image-two-container">
          <CustomImage
            className={"gallery-image image-mobile"}
            src={imageData.second.mobile}
            altText={imageData.second.imageAltText}
          />
          <CustomImage
            className={"gallery-image image-tablet"}
            src={imageData.second.tablet}
            altText={imageData.second.imageAltText}
          />
          <CustomImage
            className={"gallery-image image-desktop"}
            src={imageData.second.desktop}
            altText={imageData.second.imageAltText}
          />
        </div>
      </div>
      <div className="gallery-section-two">
        <div className="gallery-image-three-container">
          <CustomImage
            className={"gallery-image image-mobile"}
            src={imageData.third.mobile}
            altText={imageData.third.imageAltText}
          />
          <CustomImage
            className={"gallery-image image-tablet"}
            src={imageData.third.tablet}
            altText={imageData.third.imageAltText}
          />
          <CustomImage
            className={"gallery-image image-desktop"}
            src={imageData.third.desktop}
            altText={imageData.third.imageAltText}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
