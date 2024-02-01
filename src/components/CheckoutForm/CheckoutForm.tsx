import React from "react";
import CheckoutSectionHeader from "./CheckoutSectionHeader";
import FormField from "../FormField/FormField";
import SummaryDetails from "../SummaryDetails/SummaryDetails";
import "./checkout-form.sass";

const handleChange = () => {
  return;
};

const CheckoutForm = (): JSX.Element => {
  return (
    <form action="" className="form-container main-container col">
      <section className="form-section-one col">
        <h4 className="form-section-one-header">Checkout</h4>
        <div className="billing-details-container form-sub-section-container">
          <CheckoutSectionHeader headerText="Billing Details" />
          <div className="name-and-email-container">
            <FormField
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
            isFormFieldShrink
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
          <CheckoutSectionHeader headerText="Shipping Info" />
          <FormField
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
              inputData={{
                inputName: "city-input",
                inputType: "text",
                placeholderText: "New York",
                inputOnChangeHandler: handleChange,
              }}
              labelText="City"
              warningText="Can't be blank"
            />
          </div>
          <FormField
            isFormFieldShrink
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
          <CheckoutSectionHeader headerText="Payment Details" />
          <div className="payment-method-container">
            <p className="payment-method-header">Payment Method</p>
            <div className="radio-inputs-container">
              <FormField
                isRadioInput
                inputData={{
                  inputName: "payment-type",
                  inputType: "radio",
                  inputOnChangeHandler: handleChange,
                }}
                labelText="e-Money"
                warningText="Please select"
              />
              <FormField
                isRadioInput
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

      <SummaryDetails />
    </form>
  );
};

export default CheckoutForm;
