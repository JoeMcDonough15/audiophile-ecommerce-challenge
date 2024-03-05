interface InputData {
  inputName: string;
  inputType: string;
  placeholderText?: string;
  inputOnChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

interface Props {
  inputData: InputData;
  labelText: string;
  warningText?: string;
  isRadioInput?: boolean;
  isFormFieldShrink?: boolean;
}

const FormField = ({
  inputData,
  labelText,
  warningText = "",
  isRadioInput = false,
  isFormFieldShrink = false,
}: Props): JSX.Element => {
  const {
    inputName,
    inputType,
    placeholderText = "",
    inputOnChangeHandler,
  } = inputData;
  return (
    <div
      className={
        isRadioInput
          ? "form-field col radio-container"
          : isFormFieldShrink
          ? "form-field col form-field-shrink"
          : "form-field col"
      }
    >
      <p
        id={`${inputName}-warning-text`}
        className={`${inputName}-warning-text warning-text `}
      >
        {warningText}
      </p>
      <label
        className={
          isRadioInput ? "radio-input-label input-label" : "input-label"
        }
      >
        <span className="input-label-text">{labelText}</span>
        {isRadioInput ? (
          <input
            name={inputName}
            type={inputType}
            placeholder={placeholderText}
            onChange={inputOnChangeHandler}
            className="radio-input"
          />
        ) : (
          <input
            name={inputName}
            type={inputType}
            placeholder={placeholderText}
            onChange={inputOnChangeHandler}
          />
        )}
      </label>
    </div>
  );
};

export default FormField;

// have two different FormField components.

// FormField component one should be called FormFieldTextInput:

// Props needed for FormFieldTextInput:

// 1) inputData: InputData
//  a. inputName: string;
//  b. inputType: string;
//  c. placeholderText: string;
//  d. inputOnChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
//
// 2) labelText: string
// 3) warningText: string
// 4) isFormFieldShrink?: boolean
//
//
//
// FormField component two should be called FormFieldRadioInput

// Props needed for FormFieldRadioInput:

// 1) inputData: InputData
//  a. inputName // we won't need this though because we can set it on the component since both radio buttons should have
// the same name of payment-type
//  b. inputType: string; // this doesn't need to be a prop it would be set on the component
//  c. value: string; // this will be used inside the onChange to set the state on the CheckoutForm (parent element) to be
// either e-money or cash
//  d. inputOnChangeHandler: React.ChangeEventHandler<HTMLInputElement>; // this function will set the state on CheckoutForm to be the value of whatever radio was just clicked
//  setPaymentOption(event.target.value)
//  e. checked: boolean; // <FormFieldRadioInput buttonChecked={paymentOption === 'e-money'} /> // true or false will determine whether this button appears checked

// 2) labelText: string
// 3) warningText: string // we won't need this at all for radios.
// This is because one option will always be selected if it's based on state and the state is initialized as "e-money"
// inside the CheckoutForm parent component
