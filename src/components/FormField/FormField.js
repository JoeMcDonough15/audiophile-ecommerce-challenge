import React from "react";

const FormField = (props) => {
  const { customClasses, inputData, labelText, warningText } = props;
  const { containerClass, radioInputClass } = customClasses;
  const { inputName, inputType, placeholderText, inputOnChangeHandler } =
    inputData;
  return (
    <div>
      {inputType !== "radio" ? (
        <div className={`form-field-col form-field ${containerClass}`}>
          <div className="top-row-text-field">
            <label className="input-label" htmlFor={inputName}>
              {labelText}
            </label>
            <p className="warning-text hide">{warningText}</p>
          </div>
          <input
            name={inputName}
            type={inputType}
            placeholder={placeholderText}
            onChange={inputOnChangeHandler}
          />
        </div>
      ) : (
        <div className="form-field-row form-field radio-container">
          <input
            name={inputName}
            type="radio"
            onChange={inputOnChangeHandler}
            className={radioInputClass}
          />
          <label className="input-label" htmlFor={inputName}>
            {labelText}
          </label>
        </div>
      )}
    </div>
  );
};

export default FormField;
