import "./mobile-menu.sass";
import ProductCategoryMenu from "../ProductCategoryMenu/ProductCategoryMenu";
import { useContext, useEffect, useState } from "react";
import { ModalVisibilityContext } from "../Context/ModalVisibilityContext";

const MobileMenu = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { modalVisibilityIndicator, handleMenuClick } = useContext(
    ModalVisibilityContext
  );

  useEffect(() => {
    if (modalVisibilityIndicator === 1) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  }, [modalVisibilityIndicator]);

  let mobileMenuClasses = "mobile-menu";
  if (!modalIsOpen) {
    mobileMenuClasses += " hide";
  }
  return (
    <section id="mobile-menu" className={mobileMenuClasses}>
      <ProductCategoryMenu />;
    </section>
  );
};

export default MobileMenu;
