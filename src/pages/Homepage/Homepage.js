import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import data from "../../../starter-code/data.json";

const Homepage = () => {
  console.log("data: ", data);
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default Homepage;
