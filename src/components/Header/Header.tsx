import "./header.sass";
import LinkAsSvg from "../LinkAsSvg/LinkAsSvg";
import IconAsSvg from "../IconAsSvg/IconAsSvg";
import NavBar from "../NavBar/NavBar";
import CartModal from "../CartModal/CartModal";
import { useContext, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { AllSvgDetails } from "../Context/SvgDetailsContext";

const Header = (): JSX.Element => {
  const AllSvgs = useContext(AllSvgDetails);
  const { hamburgerMenu, logo, shoppingCart } = AllSvgs;
  const [modalVisibilityIndicator, setModalVisibilityIndicator] = useState(0);

  function handleCartClick() {
    if (modalVisibilityIndicator === 0 || modalVisibilityIndicator === 1) {
      setModalVisibilityIndicator(2);
    } else {
      setModalVisibilityIndicator(0);
    }
  }

  function handleMenuClick() {
    if (modalVisibilityIndicator === 0 || modalVisibilityIndicator === 2) {
      setModalVisibilityIndicator(1);
    } else {
      setModalVisibilityIndicator(0);
    }
  }
  return (
    <header id="header" className="header-transparent-background">
      <section className="mobile-header main-container row">
        <IconAsSvg
          className="hamburger-menu-icon"
          svgDetails={hamburgerMenu}
          onClick={handleMenuClick}
        />
        <LinkAsSvg className="logo-icon" svgDetails={logo} />
        <IconAsSvg
          className="shopping-cart-icon"
          svgDetails={shoppingCart}
          onClick={handleCartClick}
        />
      </section>
      <section className="tablet-header row main-container">
        <div className="icon-group row">
          <IconAsSvg
            className="hamburger-menu-icon"
            svgDetails={hamburgerMenu}
            onClick={handleMenuClick}
          />
          <LinkAsSvg className="logo-icon" svgDetails={logo} />
        </div>
        <IconAsSvg
          className="shopping-cart-icon"
          svgDetails={shoppingCart}
          onClick={handleCartClick}
        />
      </section>
      <section className="desktop-header row main-container">
        <LinkAsSvg className="logo-icon" svgDetails={logo} />
        <NavBar className="row navigation-bar" />
        <IconAsSvg
          className="shopping-cart-icon"
          svgDetails={shoppingCart}
          onClick={handleCartClick}
        />
      </section>
      <MobileMenu
        modalIsOpen={modalVisibilityIndicator === 1}
        handleMenuClick={handleMenuClick}
      />
      <CartModal
        modalIsOpen={modalVisibilityIndicator === 2}
        handleCartClick={handleCartClick}
      />
    </header>
  );
};

export default Header;
