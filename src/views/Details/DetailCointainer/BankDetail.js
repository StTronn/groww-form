import React from "react";
import InputField from "../../../UI/InputField";
import PrimaryButton from "../../../UI/PrimaryButton";
import "./index.css";

const BankDetail = () => {
  return (
    <div style={{ justifySelf: "center" }} className="fadeInUpDetails">
      <div className="titleDetails">
        Bank
        <span style={{ color: "var(--primaryClr)" }}> Details</span>
      </div>

      <div className="fieldsDetails">
        <InputField
          id={"pan"}
          name="pan"
          placeholder={"Pan Card No"}
          type="text"
        />
        <InputField
          placeholder={"Bank Account No"}
          name="bNo"
          id={"bNo"}
          type="text"
        />
        <InputField
          placeholder={"IFSC Code"}
          name="ifsc"
          id={"ifsc"}
          type="text"
        />
        <InputField
          placeholder={"Bank Name"}
          name="bName"
          id={"bName"}
          type="text"
        />
      </div>
      <div className="centerButton">
        <PrimaryButton style={{ width: "180px", height: "50px" }}>
          Next
        </PrimaryButton>
      </div>
      {/* this is only for animation */}
      <div className="imgBackgroundDetails"></div>
    </div>
  );
};

export default BankDetail;
