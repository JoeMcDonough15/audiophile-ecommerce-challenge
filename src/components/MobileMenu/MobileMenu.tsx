import "./mobile-menu.sass";
import ProductCategoryMenu from "../ProductCategoryMenu/ProductCategoryMenu";

interface Props {
  modalIsActive: number;
  handleMenuClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const MobileMenu = ({ modalIsActive, handleMenuClick }: Props): JSX.Element => {
  let mobileMenuClasses = "mobile-menu";

  if (modalIsActive === 0 || modalIsActive === 2) {
    mobileMenuClasses += " hide";
  }
  return (
    <section id="mobile-menu" className={mobileMenuClasses}>
      <ProductCategoryMenu handleMenuClick={handleMenuClick} />;
    </section>
  );
};

export default MobileMenu;
