import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Checkout from "./pages/Checkout/Checkout";
import Earphones from "./pages/Earphones/Earphones";
import Headphones from "./pages/Headphones/Headphones";
import Speakers from "./pages/Speakers/Speakers";
import ProductEarphones from "./pages/Product-Earphones/ProductEarphones";
import ProductXx59Headphones from "./pages/Product-xx59-Headphones/ProductXx59Headphones";
import ProductXx99MarkOneHeadphones from "./pages/Product-xx99-Mark-One-Headphones/ProductXx99MarkOneHeadphones";
import ProductXx99MarkTwoHeadphones from "./pages/Product-xx99-Mark-Two-Headphones/ProductXx99MarkTwoHeadphones";
import ProductZx7Speaker from "./pages/Product-zx7-Speaker/ProductZx7Speaker";
import ProductZx9Speaker from "./pages/Product-zx9-Speaker/ProductZx9Speaker";
import "../sass/global.sass";

function App() {
  return (
    <main>
      <Header />
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
        <Route path="/product-zx9-speaker" component={ProductZx9Speaker} /> */
        <Route path="/checkout" component={Checkout} />
        <Route path="/product-earphones" component={ProductEarphones} />
      </Switch>
    </main>
  );
}

export default App;
