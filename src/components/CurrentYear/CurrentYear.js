import React from "react";

const CurrentYear = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return <span>{currentYear}</span>;
};

export default CurrentYear;
