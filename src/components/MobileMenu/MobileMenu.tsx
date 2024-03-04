import "./mobile-menu.sass";
import ProductCategoryMenu from "../ProductCategoryMenu/ProductCategoryMenu";

interface Props {
  modalIsOpen: boolean;
  handleMenuClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const MobileMenu = ({
  modalIsOpen = false,
  handleMenuClick,
}: Props): JSX.Element => {
  let mobileMenuClasses = "mobile-menu";

  if (!modalIsOpen) {
    mobileMenuClasses += " hide";
  }
  return (
    <section id="mobile-menu" className={mobileMenuClasses}>
      <ProductCategoryMenu handleMenuClick={handleMenuClick} />;
    </section>
  );
};

export default MobileMenu;
