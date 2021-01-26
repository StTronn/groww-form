import React, { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";
//added due to add dependices in bit.dev  & generating component library
import "../../App.css";

/**
*    @render react
*    @name InputField
*    @description Input Field for Entering Information 
*    @example
*    <InputField
*       placeholder="Enter Your Email"
*       type="email"
*       id ="email"
*       name="email"
     />
*/
const InputField = ({
  id,
  placeholder,
  attempt,
  type,
  value,
  onChange,
  error,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const labelClass = calculateLabelClass(value, focus, error);
  return (
    <div style={{ position: "relative" }}>
      <input
        type={type}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="inputField"
        maxlength="250"
        id={id}
        min="0"
        max="10000000"
        {...props}
      />
      <span className={labelClass}>{placeholder}</span>
      {(!attempt || !error) && <span style={{ opacity: "0" }}>req </span>}
      {attempt && error && <span className="errorInputField"> {error}</span>}
    </div>
  );
};

const calculateLabelClass = (
  value,
  focus,
  error,
  prefix = "floating-label"
) => {
  let labelClass = `${prefix}-placeholder`;
  if (focus || value) {
    if (error) labelClass = `${prefix}-wrong`;
    else labelClass = `${prefix}-correct`;
  }
  return labelClass;
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default InputField;
