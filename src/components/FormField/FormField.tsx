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
        className={`${inputName}-warning-text warning-text hide`}
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
