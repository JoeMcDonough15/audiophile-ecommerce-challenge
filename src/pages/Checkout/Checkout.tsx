import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Footer from "../../components/Footer/Footer";
import "./checkout.sass";

const Checkout = () => {
  return (
    <main className="checkout-page">
      <Header />
      <div className="main-container">
        <Button
          className={"button-text-only"}
          buttonText="go back"
          buttonDestination=""
        />
      </div>
      <CheckoutForm />
      {/* <Footer /> */}
    </main>
  );
};

export default Checkout;
