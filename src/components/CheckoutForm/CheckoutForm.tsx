import CheckoutSectionHeader from "./CheckoutSectionHeader";
import SummaryDetails from "../SummaryDetails/SummaryDetails";
import "./checkout-form.sass";
import { useEffect, useState } from "react";
import FormFieldRadioInput from "../FormField/FormFieldRadioInput";
import FormFieldTextInput from "../FormField/FormFieldTextInput";
import { customerSchema } from "../../Validations/CustomerValidation";
import { useFormik } from "formik";
import { OrderInformation } from "../../pages/Checkout/Checkout";

interface Props {
  setFormComplete: (arg0: boolean) => void;
  orderInformation: OrderInformation;
  setOrderInformation: (arg0: OrderInformation) => void;
}

const CheckoutForm = ({
  setFormComplete,
  orderInformation,
  setOrderInformation,
}: Props): JSX.Element => {
  const [paymentInstructions, setPaymentInstructions] = useState("e-money");
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: orderInformation,
    validationSchema: customerSchema,
    onSubmit: (values) => {
      setOrderInformation(values);
      setFormComplete(true);
    },
  });

  useEffect(() => {
    setPaymentInstructions(values.paymentOption);
  }, [values]);

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="form-container main-container col"
    >
      <section className="form-section-one col">
        <h4 className="form-section-one-header">Checkout</h4>
        <div className="billing-details-container form-sub-section-container">
          <CheckoutSectionHeader headerText="Billing Details" />
          <div className="name-and-email-container">
            <FormFieldTextInput
              inputData={{
                inputName: "name",
                inputValue: values.name,
                inputType: "text",
                placeholderText: "Alexei Ward",
                inputOnChangeHandler: handleChange,
                inputOnBlurHandler: handleBlur,
              }}
              labelText="Name"
              warningText={errors.name}
            />
            <FormFieldTextInput
              inputData={{
                inputName: "email",
                inputValue: values.email,
                inputType: "email",
                placeholderText: "alexeiward@mail.com",
                inputOnChangeHandler: handleChange,
                inputOnBlurHandler: handleBlur,
              }}
              labelText="Email Address"
              warningText={errors.email}
            />
          </div>
          <FormFieldTextInput
            inputData={{
              inputName: "phone",
              inputValue: values.phone,
              inputType: "tel",
              placeholderText: "+1 202-555-0136",
              inputOnChangeHandler: handleChange,
              inputOnBlurHandler: handleBlur,
            }}
            labelText="Phone Number"
            warningText={errors.phone}
          />
        </div>
        <div className="shipping-info-container form-sub-section-container">
          <CheckoutSectionHeader headerText="Shipping Info" />
          <FormFieldTextInput
            inputData={{
              inputName: "address",
              inputValue: values.address,
              inputType: "text",
              placeholderText: "1137 Williams Avenue",
              inputOnChangeHandler: handleChange,
              inputOnBlurHandler: handleBlur,
            }}
            labelText="Address"
            warningText={errors.address}
            isFormFieldFullWidth
          />
          <div className="zip-and-city-container">
            <FormFieldTextInput
              inputData={{
                inputName: "zip",
                inputValue: values.zip,
                inputType: "number",
                placeholderText: "10001",
                inputOnChangeHandler: handleChange,
                inputOnBlurHandler: handleBlur,
              }}
              labelText="Zip Code"
              warningText={errors.zip}
            />
            <FormFieldTextInput
              inputData={{
                inputName: "city",
                inputValue: values.city,
                inputType: "text",
                placeholderText: "New York",
                inputOnChangeHandler: handleChange,
                inputOnBlurHandler: handleBlur,
              }}
              labelText="City"
              warningText={errors.city}
            />
          </div>
          <FormFieldTextInput
            inputData={{
              inputName: "country",
              inputValue: values.country,
              inputType: "text",
              placeholderText: "United States",
              inputOnChangeHandler: handleChange,
              inputOnBlurHandler: handleBlur,
            }}
            labelText="Country"
            warningText={errors.country}
          />
        </div>
        <div className="payment-details-container form-sub-section-container">
          <CheckoutSectionHeader headerText="Payment Details" />
          <div className="payment-method-container">
            <p className="payment-method-header">Payment Method</p>
            <div className="radio-inputs-container">
              <FormFieldRadioInput
                inputData={{
                  inputValue: "e-money",
                  inputOnChangeHandler: handleChange,
                }}
                labelText="e-Money"
                inputChecked={paymentInstructions === "e-money"}
              />
              <FormFieldRadioInput
                inputData={{
                  inputValue: "cash",
                  inputOnChangeHandler: handleChange,
                }}
                labelText="Cash on Delivery"
                inputChecked={paymentInstructions === "cash"}
              />
            </div>
          </div>
          {paymentInstructions === "e-money" && (
            <div className="optional-emoney-details">
              <FormFieldTextInput
                inputData={{
                  inputName: "emoneyNumber",
                  inputValue: values.emoneyNumber,
                  inputType: "number",
                  placeholderText: "238521993",
                  inputOnChangeHandler: handleChange,
                  inputOnBlurHandler: handleBlur,
                }}
                labelText="e-money Number"
                warningText={errors.emoneyNumber}
              />
              <FormFieldTextInput
                inputData={{
                  inputName: "emoneyPin",
                  inputValue: values.emoneyPin,
                  inputType: "number",
                  placeholderText: "6891",
                  inputOnChangeHandler: handleChange,
                  inputOnBlurHandler: handleBlur,
                }}
                labelText="e-money PIN"
                warningText={errors.emoneyPin}
              />
            </div>
          )}
        </div>
      </section>
      <SummaryDetails />
    </form>
  );
};

export default CheckoutForm;
