import React, { useState } from "react";

import useForm from "./formik";
import InputField from "../../../../UI/InputField";
import PrimaryButton from "../../../../UI/PrimaryButton";


const BankDetail = () => {
  const [attempt, setAttempt] = useState(false);
  const formik = useForm();

  return (
    <div style={{ justifySelf: "center" }} className="fadeInUpDetails">
      <div className="titleDetails">
        Bank
        <span style={{ color: "var(--primaryClr)" }}> Details</span>
      </div>

      <div className="fieldsDetails">
        {Object.keys(formik.values).map((field, i) =>
          <InputField
            onChange={formik.handleChange}
            value={formik.values[field]}
            error={formik.errors[field]}
            attempt={attempt}
            id={field}
            name={field}
            placeholder={prompt[field]}
            setAttempt={setAttempt}
            key={i}
          />
        )}
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


const prompt = { pan: "Pan No", bNo: "Bank Acc No", ifsc: "IFSC Code", bName: "Bank Name" }

export default BankDetail;
