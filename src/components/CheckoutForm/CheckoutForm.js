import React from "react";
import "./checkout-form.sass";

const CheckoutForm = () => {
  return (
    <form action="" className="form-container">
      <div className="form-field-big form-field-col">
        <div className="top-row-text-field form-field-row">
          <label htmlFor="name-input">Name</label>
          <p className="warning-text">Wrong format</p>
        </div>
        <input
          name="name-input"
          type="text"
          className="text-input"
          placeholder="Insert your name"
        />
      </div>
      <div className="form-field-small form-field-row radio-container">
        <input name="payment-type" type="radio" className="radio-input" />
        <label htmlFor="">e-money</label>
      </div>
      <div className="form-field-small form-field-row radio-container">
        <input name="payment-type" type="radio" className="radio-input" />
        <label htmlFor="">Cash at the delivery</label>
      </div>
      <div className="form-field form-field-row">
        <div className="quantity-container">
          <div className="quantity-buttons-container">
            <span className="button-minus">-</span>
            <span className="quantity">1</span>
            <span className="button-plus">+</span>
          </div>
        </div>
      </div>
    </form>
  );
};

// The quantity-container section will not go on the checkout form
// but is included because I wrote this while prepping the design's input and form styles

export default CheckoutForm;
