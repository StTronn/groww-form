import React,{useState} from "react";

import useForm from "./formik";
import InputField from "../../../../UI/InputField";
import PrimaryButton from "../../../../UI/PrimaryButton";


const PersonalDetail = () => {
  const [attempt, setAttempt] = useState(false);
  const formik = useForm();

  return (
    <div style={{ justifySelf: "center" }} className="fadeInUpDetails">
      <div className="titleDetails ">
        Personal
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


const prompt = { name: "Your Name", mobile: "Moblie No", dob: "DOB: dd/mm/yyyy" }

export default PersonalDetail;
