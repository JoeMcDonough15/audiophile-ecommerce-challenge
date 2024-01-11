import React from "react";
import "./checkout-form.sass";

const CheckoutForm = () => {
  return (
    <form action="" className="form-container main-container">
      <section className="form-section-one col">
        <h4 className="form-section-one-header">Checkout</h4>
        <div className="billing-details-container form-sub-section-container">
          <h6 className="dark-orange-text subheading form-sub-section-header billing-details-header">
            Billing Details
          </h6>
          <div className="name-and-email-container">
            <div className="name-container form-field-shrink form-field-col">
              <div className="top-row-text-field">
                <label htmlFor="name-input">Name</label>
                <p className="warning-text hide">Wrong format</p>
              </div>
              <input
                name="name-input"
                type="text"
                className="text-input name-input"
                placeholder="Alexei Ward"
              />
            </div>
            <div className="email-container form-field-shrink form-field-col">
              <div className="top-row-text-field">
                <label htmlFor="email-input">Email Address</label>
                <p className="warning-text hide">Wrong format</p>
              </div>
              <input
                name="email-input"
                type="email"
                className="text-input email-input"
                placeholder="alexeiward@mail.com"
              />
            </div>
          </div>
          <div className="phone-container form-field-shrink form-field-col">
            <div className="top-row-text-field">
              <label htmlFor="phone-input">Phone Number</label>
              <p className="warning-text hide">Wrong format</p>
            </div>
            <input
              name="phone-input"
              type="tel"
              className="text-input phone-input"
              placeholder="+1 202-555-0136"
            />
          </div>
        </div>
        <div className="shipping-info-container form-sub-section-container">
          <h6 className="dark-orange-text form-sub-section-header subheading billing-details-header">
            Shipping Info
          </h6>{" "}
          <div className="address-container form-field-col">
            <div className="top-row-text-field">
              <label htmlFor="address-input">Address</label>
              <p className="warning-text hide">Wrong format</p>
            </div>
            <input
              name="address-input"
              type="text"
              className="text-input address-input"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className="zip-and-city-container">
            <div className="zip-container form-field-shrink form-field-col">
              <div className="top-row-text-field">
                <label htmlFor="zip-input">Zip Code</label>
                <p className="warning-text hide">Wrong format</p>
              </div>
              <input
                name="zip-input"
                type="number"
                className="text-input zip-input"
                placeholder="10001"
              />
            </div>
            <div className="city-container form-field-shrink form-field-col">
              <div className="top-row-text-field">
                <label htmlFor="city-input">City</label>
                <p className="warning-text hide">Wrong format</p>
              </div>
              <input
                name="city-input"
                type="text"
                className="text-input city-input"
                placeholder="New York"
              />
            </div>
          </div>
          <div className="country-container form-field-shrink form-field-col">
            <div className="top-row-text-field">
              <label htmlFor="country-input">Country</label>
              <p className="warning-text hide">Wrong format</p>
            </div>
            <input
              name="country-input"
              type="text"
              className="text-input country-input"
              placeholder="United States"
            />
          </div>
        </div>
        <div className="payment-details-container form-sub-section-container">
          <h6 className="dark-orange-text form-sub-section-header subheading billing-details-header">
            Payment Details
          </h6>{" "}
          <div className="payment-method-container">
            <p className="payment-method-header">Payment Method</p>
            <div className="form-field-shrink form-field-row radio-container">
              <input name="payment-type" type="radio" className="radio-input" />
              <label htmlFor="">e-money</label>
            </div>
            <div className="form-field-shrink form-field-row radio-container">
              <input name="payment-type" type="radio" className="radio-input" />
              <label htmlFor="">Cash at the delivery</label>
            </div>
          </div>
          <div className="optional-emoney-details">
            <div className="emoney-number-container form-field-shrink form-field-col">
              <div className="top-row-text-field">
                <label htmlFor="emoney-number-input">e-money Number</label>
                <p className="warning-text hide">Wrong format</p>
              </div>
              <input
                name="emoney-number-input"
                type="number"
                className="text-input emoney-number-input"
                placeholder="238521993"
              />
            </div>
            <div className="emoney-pin-container form-field-shrink form-field-col">
              <div className="top-row-text-field">
                <label htmlFor="emoney-pin-input">e-money PIN</label>
                <p className="warning-text hide">Wrong format</p>
              </div>
              <input
                name="emoney-pin-input"
                type="number"
                className="text-input emoney-pin-input"
                placeholder="6891"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="form-section-two">Section Two</section>
    </form>
  );
};

export default CheckoutForm;
