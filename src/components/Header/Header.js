import React from "react";
import "./header.sass";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Header = () => {
  return (
    <header>
      {/* <section className="mobile-header"></section>
      <section className="tablet-header"></section>
      <section className="desktop-header"></section> */}
      <CheckoutForm />
    </header>
  );
};

export default Header;
