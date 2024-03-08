interface InputData {
  inputValue: string;
  setPaymentOption: (arg0: string) => void;
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
  const { inputValue, setPaymentOption = () => {} } = inputData;
  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setPaymentOption(event.currentTarget.value);
  }
  return (
    <div className={"form-field col radio-container"}>
      <label className={"radio-input-label input-label"}>
        <span className="input-label-text">{labelText}</span>
        <input
          name="payment-type"
          type="radio"
          value={inputValue}
          checked={inputChecked}
          onChange={handleChange}
          className="radio-input"
        />
      </label>
    </div>
  );
};

export default FormFieldRadioInput;
