import React from "react";
import "./header.sass";
import LinkAsSvg from "../LinkAsSvg/LinkAsSvg";
import IconAsSvg from "../IconAsSvg/IconAsSvg";
import NavBar from "../NavBar/NavBar";

interface SvgLinkDetails {
  stroke?: string;
  strokeWidth?: string;
  internalLink?: boolean;
  linkDestination: string;
  width: string;
  height: string;
  src: string;
  gElement: boolean;
  d: string;
}

interface SvgIconDetails {
  stroke?: string;
  strokeWidth?: string;
  width: string;
  height: string;
  src: string;
  gElement: boolean;
  d: string;
}

interface Props {
  logo: SvgLinkDetails;
  hamburgerMenu: SvgIconDetails;
  shoppingCart: SvgIconDetails;
}

const Header = ({ logo, hamburgerMenu, shoppingCart }: Props): JSX.Element => {
  return (
    <header className="header-black-background">
      <section className="mobile-header main-container row">
        <IconAsSvg className="hamburger-menu-icon" svgDetails={hamburgerMenu} />
        <LinkAsSvg className="logo-icon" svgDetails={logo} />
        <IconAsSvg className="shopping-cart-icon" svgDetails={shoppingCart} />
      </section>
      <section className="tablet-header row main-container">
        <div className="icon-group row">
          <IconAsSvg
            className="hamburger-menu-icon"
            svgDetails={hamburgerMenu}
          />
          <LinkAsSvg className="logo-icon" svgDetails={logo} />
        </div>
        <IconAsSvg className="shopping-cart-icon" svgDetails={shoppingCart} />
      </section>
      <section className="desktop-header row main-container">
        <LinkAsSvg className="logo-icon" svgDetails={logo} />
        <NavBar className="row navigation-bar" />
        <IconAsSvg className="shopping-cart-icon" svgDetails={shoppingCart} />
      </section>
    </header>
  );
};

export default Header;
