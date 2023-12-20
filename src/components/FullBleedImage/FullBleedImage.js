import React from "react";
import "./full-bleed-image.sass";

const FullBleedImage = (props) => {
  return (
    <img className={props.className} src={props.src} alt={props.altText}></img>
  );
};

export default FullBleedImage;
