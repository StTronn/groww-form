import React from "react";
import "./index.css";
import PropTypes from "prop-types"
//added due to add dependices in bit.dev  & generating compoent Library
import "../../App.css";


/**
*    @render react
*    @name InputField
*    @description Input Field for Entering Information 
*    @example
*    <InputField
*       placeholder="Enter Your Email"
*       type="email"
     />
*/
const InputField = ({ placeholder, type, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <input
        type={type}
        className="inputField"
        id="login_email1"
        maxlength="250"
        min="0"
        max="10000000"
        autocomplete="on"
        required
      />
      <span class="floating-label">{placeholder}</span>
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default InputField;
