interface InputData {
  inputValue: string;
  inputOnChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

interface Props {
  inputData: InputData;
  labelText: string;
  inputChecked: boolean;
}

const FormFieldRadioInput = ({
  inputData,
  labelText,
  inputChecked = false,
}: Props): JSX.Element => {
  const { inputValue, inputOnChangeHandler = () => {} } = inputData;

  return (
    <div className={"form-field col radio-container"}>
      <label className={"radio-input-label input-label"}>
        <span className="input-label-text">{labelText}</span>
        <input
          name="paymentOption"
          type="radio"
          value={inputValue}
          defaultChecked={inputChecked}
          onChange={inputOnChangeHandler}
          className="radio-input"
        />
      </label>
    </div>
  );
};

export default FormFieldRadioInput;
