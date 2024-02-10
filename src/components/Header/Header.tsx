import "./header.sass";
import LinkAsSvg, { SvgLinkDetails } from "../LinkAsSvg/LinkAsSvg";
import IconAsSvg, { SvgDetails } from "../IconAsSvg/IconAsSvg";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

interface Props {
  logo: SvgLinkDetails;
  hamburgerMenu: SvgDetails;
  shoppingCart: SvgDetails;
}

const Header = ({ logo, hamburgerMenu, shoppingCart }: Props): JSX.Element => {
  const [cartModalActive, setCartModalActive] = useState(false);
  function handleCartClick() {
    setCartModalActive(!cartModalActive);
  }
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  function handleMenuClick() {
    setMobileMenuActive(!mobileMenuActive);
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
        mobileMenuActive={mobileMenuActive}
        handleMenuClick={handleMenuClick}
      />
      <Cart
        cartModalIsActive={cartModalActive}
        handleCartClick={handleCartClick}
      />
    </header>
  );
};

export default Header;
