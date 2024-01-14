import React from "react";

const CustomImage = (props) => {
  const { className, src, altText } = props;
  return (
    <img
      className={className ? `${className}` : null}
      src={src}
      alt={altText}
    ></img>
  );
};

export default CustomImage;
