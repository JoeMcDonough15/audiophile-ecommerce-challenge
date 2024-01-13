import React from "react";

const FormField = (props) => {
  const { inputData, labelText, warningText, isRadioInput, isFormFieldShrink } =
    props;
  const { inputName, inputType, placeholderText, inputOnChangeHandler } =
    inputData;
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
        <input
          name={inputName}
          type={inputType}
          placeholder={placeholderText}
          onChange={inputOnChangeHandler}
          className={isRadioInput ? "radio-input" : null}
        />
      </label>
    </div>
  );
};

export default FormField;
