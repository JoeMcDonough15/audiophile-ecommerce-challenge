import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import "./banner.sass";

const Banner = (props) => {
  const { bannerText } = props;
  return (
    <div className="banner main-container">
      <ThinRule customStyle="thin-rule-header" />
      <h2 className="banner-text">{bannerText}</h2>
    </div>
  );
};

export default Banner;
