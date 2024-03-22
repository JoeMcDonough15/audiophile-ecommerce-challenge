interface InputData {
  inputName: string;
  inputType: string;
  placeholderText: string;
  inputOnChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

interface Props {
  inputData: InputData;
  labelText: string;
  warningText: string;
  isFormFieldFullWidth?: boolean;
}

const FormFieldTextInput = ({
  inputData,
  labelText,
  warningText,
  isFormFieldFullWidth = false,
}: Props): JSX.Element => {
  const { inputName, inputType, placeholderText, inputOnChangeHandler } =
    inputData;
  return (
    <div
      className={`form-field col ${
        isFormFieldFullWidth ? "form-field-full-width" : ""
      }`}
    >
      <p
        id={`${inputName}-warning-text`}
        className={`${inputName}-warning-text warning-text `}
      >
        {warningText}
      </p>
      <label className="input-label">
        <span className="input-label-text">{labelText}</span>
        <input
          name={inputName}
          type={inputType}
          placeholder={placeholderText}
          onChange={inputOnChangeHandler}
        />
      </label>
    </div>
  );
};

export default FormFieldTextInput;
