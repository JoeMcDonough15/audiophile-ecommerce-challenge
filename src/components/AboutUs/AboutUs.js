import React from "react";
import "./about-us.sass";

const AboutUs = () => {
  return (
    <section className="about-us-container main-container">
      {" "}
      <div className="about-us-image-container"></div>{" "}
      <div className="about-us-text-container">
        <h4 className="about-us-header">
          Bringing you the <span className="dark-orange-text">best</span> audio
          gear
        </h4>
        <p className="about-us-text darker-grey-text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
