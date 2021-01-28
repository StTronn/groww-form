import React from "react";

import InputField from "../../../UI/InputField";
import PrimaryButton from "../../../UI/PrimaryButton";

import "./index.css";

const PersonalDetail = () => {
  return (
    <div style={{ justifySelf: "center" }} className="fadeInUpDetails">
      <div className="titleDetails ">
        Personal
        <span style={{ color: "var(--primaryClr)" }}> Details</span>
      </div>

      <div className="fieldsDetails">
        <InputField
          id={"name"}
          name="name"
          placeholder={"Enter Your Name"}
          type="text"
        />
        <InputField
          placeholder={"Enter Your Mobile No"}
          name="mobile"
          id={"mobile"}
          type="mobile"
        />
        <InputField placeholder={"DOB"} name="dob" id={"dob"} type="dob" />
      </div>
      <div className="centerButton">
        <PrimaryButton style={{ width: "180px", height: "50px" }}>
          Submit
        </PrimaryButton>
      </div>
      {/* this is only for animation */}
      <div className="imgBackgroundDetails"></div>
    </div>
  );
};

export default PersonalDetail;
