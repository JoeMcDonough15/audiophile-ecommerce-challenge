import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import "./gallery.sass";

const Gallery = (props) => {
  const { imageData } = props;
  const { galleryImageOneData, galleryImageTwoData, galleryImageThreeData } =
    imageData;
  return (
    <section className="gallery main-container">
      <div className="gallery-section-one col">
        <div className="gallery-image-one-container">
          {galleryImageOneData.map((imageObject) => {
            return (
              <CustomImage
                className={`gallery-image-one image-${imageObject.imageSize}`}
                key={imageObject.id}
                src={imageObject.imageSrc}
                alt={imageObject.imageAltText}
              />
            );
          })}
        </div>
        <div className="gallery-image-two-container">
          {galleryImageTwoData.map((imageObject) => {
            return (
              <CustomImage
                className={`gallery-image-two image-${imageObject.imageSize}`}
                key={imageObject.id}
                src={imageObject.imageSrc}
                alt={imageObject.imageAltText}
              />
            );
          })}
        </div>
      </div>
      <div className="gallery-section-two">
        <div className="gallery-image-three-container">
          {galleryImageThreeData.map((imageObject) => {
            return (
              <CustomImage
                className={`gallery-image-three image-${imageObject.imageSize}`}
                key={imageObject.id}
                src={imageObject.imageSrc}
                alt={imageObject.imageAltText}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
