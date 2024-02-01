import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import "./banner.sass";

interface Props {
  bannerText: string;
}

const Banner = ({ bannerText }: Props): JSX.Element => {
  return (
    <div className="banner main-container">
      <ThinRule customStyle="thin-rule-header" />
      <h2 className="banner-text">{bannerText}</h2>
    </div>
  );
};

export default Banner;
