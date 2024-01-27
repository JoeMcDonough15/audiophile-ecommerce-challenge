import React from "react";
import "./header.sass";
import LinkAsSvg from "../LinkAsSvg/LinkAsSvg";
import IconAsSvg from "../IconAsSvg/IconAsSvg";
import NavBar from "../NavBar/NavBar";

interface SvgDetails {
  id: number;
  slug: string;
  stroke?: string;
  strokeWidth?: string;
  internalLink?: boolean;
  linkDestination?: string;
  width: string;
  height: string;
  src: string;
  gElement: boolean;
  fill: string;
  fillRule: string;
  d: string;
}

interface Props {
  logo: SvgDetails;
  hamburgerMenu: SvgDetails;
  shoppingCart: SvgDetails;
}

const Header = ({ logo, hamburgerMenu, shoppingCart }: Props) => {
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

//   <div className="header-image-background">
//     <section className="mobile-header main-container row">
//       <IconAsSvg
//         className="hamburger-menu-icon"
//         svgDetails={hamburgerMenu}
//       />
//       <LinkAsSvg className="logo-icon" svgDetails={logo} />
//       <IconAsSvg
//         className="shopping-cart-icon"
//         svgDetails={shoppingCart}
//       />
//     </section>
//     <section className="tablet-header row main-container">
//       <div className="icon-group row">
//         <IconAsSvg
//           className="hamburger-menu-icon"
//           svgDetails={hamburgerMenu}
//         />
//         <LinkAsSvg className="logo-icon" svgDetails={logo} />
//       </div>
//       <IconAsSvg
//         className="shopping-cart-icon"
//         svgDetails={shoppingCart}
//       />
//     </section>
//     <section className="desktop-header row main-container">
//       <LinkAsSvg className="logo-icon" svgDetails={logo} />
//       <NavBar className="row navigation-bar" />
//       <IconAsSvg
//         className="shopping-cart-icon"
//         svgDetails={shoppingCart}
//       />
//     </section>
//     <HeroSection featuredProduct={featuredProduct} />
//   </div>
// ) : withBanner ? (
//   <div className="header-black-background header-with-banner">
//     <section className="mobile-header main-container row">
//       <IconAsSvg
//         className="hamburger-menu-icon"
//         svgDetails={hamburgerMenu}
//       />
//       <LinkAsSvg className="logo-icon" svgDetails={logo} />
//       <IconAsSvg
//         className="shopping-cart-icon"
//         svgDetails={shoppingCart}
//       />
//     </section>
//     <section className="tablet-header row main-container">
//       <div className="icon-group row">
//         <IconAsSvg
//           className="hamburger-menu-icon"
//           svgDetails={hamburgerMenu}
//         />
//         <LinkAsSvg className="logo-icon" svgDetails={logo} />
//       </div>
//       <IconAsSvg
//         className="shopping-cart-icon"
//         svgDetails={shoppingCart}
//       />
//     </section>
//     <section className="desktop-header row main-container">
//       <LinkAsSvg className="logo-icon" svgDetails={logo} />
//       <NavBar className="row navigation-bar" />
//       <IconAsSvg
//         className="shopping-cart-icon"
//         svgDetails={shoppingCart}
//       />
//     </section>
//     <Banner bannerText={bannerText} />
//   </div>
