"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

require("../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var InputField = function InputField(_ref) {
  var placeholder = _ref.placeholder,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["placeholder", "type"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    className: "inputField",
    id: "login_email1",
    maxlength: "250",
    min: "0",
    max: "10000000",
    autocomplete: "on",
    required: true
  }), /*#__PURE__*/_react.default.createElement("span", {
    class: "floating-label"
  }, placeholder));
};

var _default = InputField;
exports.default = _default;

//# sourceMappingURL=index.js.map