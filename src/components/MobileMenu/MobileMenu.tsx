import "./mobile-menu.sass";
import ProductCategoryMenu from "../ProductCategoryMenu/ProductCategoryMenu";
const MobileMenu = (): JSX.Element => {
  return (
    <section id="mobile-menu" className="mobile-menu hide">
      <ProductCategoryMenu />;
    </section>
  );
};

export default MobileMenu;
