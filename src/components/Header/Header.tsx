import "./header.sass";
import LinkAsSvg from "../LinkAsSvg/LinkAsSvg";
import IconAsSvg from "../IconAsSvg/IconAsSvg";
import NavBar from "../NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { AllSvgDetails } from "../Context/SvgDetailsContext";
import { ModalVisibilityContext } from "../Context/ModalVisibilityContext";
import useScrollPosition from "../../customHooks/useScrollPosition";

const Header = (): JSX.Element => {
  const AllSvgs = useContext(AllSvgDetails);
  const { hamburgerMenu, logo, shoppingCart } = AllSvgs;

  const { handleMenuClick, handleCartClick } = useContext(
    ModalVisibilityContext
  );

  const [headerBelowHeroMobile, setHeaderBelowHeroMobile] = useState(false);
  const [headerBelowHeroAll, setHeaderBelowHeroLarge] = useState(false);
  let headerClasses = "header ";
  if (headerBelowHeroMobile) {
    headerClasses += "header-below-hero-mobile-devices ";
  }
  if (headerBelowHeroAll) {
    headerClasses += "header-below-hero-all-devices";
  }

  const scrollPosition = useScrollPosition();
  useEffect(() => {
    if (scrollPosition > 470) {
      setHeaderBelowHeroMobile(true);
    } else {
      setHeaderBelowHeroMobile(false);
    }

    if (scrollPosition > 580) {
      setHeaderBelowHeroLarge(true);
    } else {
      setHeaderBelowHeroLarge(false);
    }
  }, [scrollPosition]);

  return (
    <header id="header" className={headerClasses}>
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
          withShoppingCartBadge
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
          withShoppingCartBadge
        />
      </section>
      <section className="desktop-header row main-container">
        <LinkAsSvg className="logo-icon" svgDetails={logo} />
        <NavBar className="row navigation-bar" />
        <IconAsSvg
          className="shopping-cart-icon"
          svgDetails={shoppingCart}
          onClick={handleCartClick}
          withShoppingCartBadge
        />
      </section>
    </header>
  );
};

export default Header;
