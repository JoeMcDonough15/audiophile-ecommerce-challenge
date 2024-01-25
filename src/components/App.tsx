import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Checkout from "../pages/Checkout/Checkout";
import Earphones from "../pages/category-pages/Earphones/Earphones";
import Headphones from "../pages/category-pages/Headphones/Headphones";
import Speakers from "../pages/category-pages/Speakers/Speakers";
import ProductEarphones from "../pages/product-pages/Product-Earphones/ProductEarphones";
import ProductXx59Headphones from "../pages/product-pages/Product-xx59-Headphones/ProductXx59Headphones";
import ProductXx99MarkOneHeadphones from "../pages/product-pages/Product-xx99-Mark-One-Headphones/ProductXx99MarkOneHeadphones";
import ProductXx99MarkTwoHeadphones from "../pages/product-pages/Product-xx99-Mark-Two-Headphones/ProductXx99MarkTwoHeadphones";
import ProductZx7Speaker from "../pages/product-pages/Product-zx7-Speaker/ProductZx7Speaker";
import ProductZx9Speaker from "../pages/product-pages/Product-zx9-Speaker/ProductZx9Speaker";
import PageNotFound from "../pages/PageNotFound";
import Header from "../components/Header/Header";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import svgDetails from "./svg-details.json";

const [logo, twitter, facebook, instagram, hamburgerMenu, shoppingCart] =
  svgDetails;
function App() {
  return (
    <>
      <Header
        logo={logo}
        hamburgerMenu={hamburgerMenu}
        shoppingCart={shoppingCart}
      />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/earphones" component={Earphones} />
        <Route path="/headphones" component={Headphones} />
        <Route path="/speakers" component={Speakers} />
        <Route
          path="/product-xx59-headphones"
          component={ProductXx59Headphones}
        />
        <Route
          path="/product-xx99-mark-one-headphones"
          component={ProductXx99MarkOneHeadphones}
        />
        <Route
          path="/product-xx99-mark-two-headphones"
          component={ProductXx99MarkTwoHeadphones}
        />
        <Route path="/product-zx7-speaker" component={ProductZx7Speaker} />
        <Route path="/product-zx9-speaker" component={ProductZx9Speaker} />
        <Route path="/product-yx1-earphones" component={ProductEarphones} />
        <Route path="/checkout" component={Checkout} />
        <Route component={PageNotFound} />
      </Switch>
      <AboutUs />
      <Footer
        logo={logo}
        twitter={twitter}
        facebook={facebook}
        instagram={instagram}
      />
    </>
  );
}

export default App;

// add AboutUs and Footer here, after <Switch> so we can remove it from each
// page we are calling