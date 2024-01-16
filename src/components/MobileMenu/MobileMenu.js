import React from "react";
import "./mobile-menu.sass";
import ProductCategoryMenu from "../ProductCategoryMenu/ProductCategoryMenu";
const MobileMenu = () => {
  return (
    <section id="mobile-menu" className="mobile-menu hide">
      <ProductCategoryMenu />;
    </section>
  );
};

export default MobileMenu;

// I need this MobileMenu to contain a top level element that holds the ProductCategoryMenu.
// I want that top level component to be OUTSIDE the .main-container, and take up the entire
// width of the viewport.  It should be fixed positioned, and exist right at the bottom of the
// header
