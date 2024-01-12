import React from "react";
import FormField from "../FormField/FormField";
import "./checkout-form.sass";

const handleChange = () => {
  return;
};

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
            <FormField
              customClasses={{
                containerClass: "name-container",
              }}
              inputData={{
                inputName: "name-input",
                inputType: "text",
                placeholderText: "Alexei Ward",
                inputOnChangeHandler: handleChange,
              }}
              labelText="Name"
              warningText="Wrong format"
            />
            <FormField
              customClasses={{
                containerClass: "email-container",
              }}
              inputData={{
                inputName: "email-input",
                inputType: "email",
                placeholderText: "alexeiward@mail.com",
                inputOnChangeHandler: handleChange,
              }}
              labelText="Email Address"
              warningText="Wrong format"
            />
          </div>
          <FormField
            customClasses={{
              containerClass: "phone-container form-field-shrink",
            }}
            inputData={{
              inputName: "phone-input",
              inputType: "tel",
              placeholderText: "+1 202-555-0136",
              inputOnChangeHandler: handleChange,
            }}
            labelText="Phone Number"
            warningText="Wrong format"
          />
        </div>
        <div className="shipping-info-container form-sub-section-container">
          <h6 className="dark-orange-text form-sub-section-header subheading shipping-info-header">
            Shipping Info
          </h6>{" "}
          <FormField
            customClasses={{
              containerClass: "address-container",
            }}
            inputData={{
              inputName: "address-input",
              inputType: "text",
              placeholderText: "1137 Williams Avenue",
              inputOnChangeHandler: handleChange,
            }}
            labelText="Address"
            warningText="Wrong format"
          />
          <div className="zip-and-city-container">
            <FormField
              customClasses={{
                containerClass: "zip-container",
              }}
              inputData={{
                inputName: "zip-input",
                inputType: "number",
                placeholderText: "10001",
                inputOnChangeHandler: handleChange,
              }}
              labelText="Zip Code"
              warningText="Wrong format"
            />
            <FormField
              customClasses={{
                containerClass: "city-container",
              }}
              inputData={{
                inputName: "city-input",
                inputType: "text",
                placeholderText: "New York",
                inputOnChangeHandler: handleChange,
              }}
              labelText="City"
              warningText="Wrong format"
            />
          </div>
          <FormField
            customClasses={{
              containerClass: "country-container form-field-shrink",
            }}
            inputData={{
              inputName: "country-input",
              inputType: "text",
              placeholderText: "United States",
              inputOnChangeHandler: handleChange,
            }}
            labelText="Country"
            warningText="Wrong format"
          />
        </div>
        <div className="payment-details-container form-sub-section-container">
          <h6 className="dark-orange-text form-sub-section-header subheading payment-details-header">
            Payment Details
          </h6>{" "}
          <div className="payment-method-container">
            <p className="payment-method-header">Payment Method</p>
            <div className="radio-inputs-container">
              <FormField
                customClasses={{ radioInputClass: "radio-input" }}
                inputData={{
                  inputName: "payment-type",
                  inputType: "radio",
                  inputOnChangeHandler: handleChange,
                }}
                labelText="e-Money"
              />
              <FormField
                customClasses={{ radioInputClass: "radio-input" }}
                inputData={{
                  inputName: "payment-type",
                  inputType: "radio",
                  inputOnChangeHandler: handleChange,
                }}
                labelText="Cash on Delivery"
              />
            </div>
          </div>
          <div className="optional-emoney-details">
            <FormField
              customClasses={{
                containerClass: "e-money-number-container",
              }}
              inputData={{
                inputName: "e-money-number-input",
                inputType: "number",
                placeholderText: "238521993",
                inputOnChangeHandler: handleChange,
              }}
              labelText="e-money Number"
              warningText="Wrong format"
            />
            <FormField
              customClasses={{
                containerClass: "e-money-pin-container",
              }}
              inputData={{
                inputName: "e-money-pin-input",
                inputType: "number",
                placeholderText: "6891",
                inputOnChangeHandler: handleChange,
              }}
              labelText="e-money PIN"
              warningText="Wrong format"
            />
          </div>
        </div>
      </section>
      <section className="form-section-two">Section Two</section>
    </form>
  );
};

export default CheckoutForm;
