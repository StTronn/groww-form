import React, { useState } from "react";

import useForm from "./formik";
import InputField from "../../../UI/InputField";
import PrimaryButton from "../../../UI/PrimaryButton";

const LoginForm = () => {
	const [attempt, setAttempt] = useState(false);
	const formik = useForm();
	const handleSubmit = () => {
		formik.handleSubmit();
		setAttempt(true);
	};
	return (
		<div className="leftCointainer">
			<div>
				<div className="title">
					Welcome to
					<span style={{ color: "var(--primaryClr)" }}> Groww</span>
				</div>
				<div className="fields">
					<InputField
						onChange={formik.handleChange}
						value={formik.values.email}
						error={formik.errors.email}
						attempt={attempt}
						id={"email"}
						name="email"
						placeholder={"Your Email Address"}
						type="email"
					/>
					<InputField
						onChange={formik.handleChange}
						value={formik.values.password}
						error={formik.errors.password}
						attempt={attempt}
						placeholder={"Password"}
						id={"password"}
						type="password"
					/>
				</div>
				<PrimaryButton
					onClick={handleSubmit}
					style={{ width: "100%", height: "50px" }}
				>
					Continue
				</PrimaryButton>
			</div>
		</div>
	);
};

export default LoginForm;
