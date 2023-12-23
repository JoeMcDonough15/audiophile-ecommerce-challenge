import React from "react";

const CustomImage = (props) => {
  return (
    <img className={props.className} src={props.src} alt={props.altText}></img>
  );
};

export default CustomImage;
