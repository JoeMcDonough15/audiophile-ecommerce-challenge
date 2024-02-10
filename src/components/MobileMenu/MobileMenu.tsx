import "./mobile-menu.sass";
import ProductCategoryMenu from "../ProductCategoryMenu/ProductCategoryMenu";

interface Props {
  mobileMenuActive: boolean;
  handleMenuClick: () => void;
}
const MobileMenu = ({
  mobileMenuActive,
  handleMenuClick,
}: Props): JSX.Element => {
  let mobileMenuClasses = "mobile-menu";
  if (!mobileMenuActive) {
    mobileMenuClasses += " hide";
  }
  return (
    <section id="mobile-menu" className={mobileMenuClasses}>
      <ProductCategoryMenu handleMenuClick={handleMenuClick} />;
    </section>
  );
};

export default MobileMenu;
