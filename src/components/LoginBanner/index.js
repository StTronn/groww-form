import React from "react";
import InputField from "../../styles/InputField";
import "./index.css";



const LoginBanner = () => {
	return (
		<div className="cointainer">
			<div className="leftCointainer">
				<div>
					<div className="title">Welcome to Groww</div>
					<div className="fields">
						<InputField placeholder={"Your Email Adress"} type="email" />
						<InputField placeholder={"Your Email Adress"} type="email" />
					</div>
					<Button />
				</div>
			</div>
			<div className="imgBackground"></div>
		</div>
	);
};


const Button = ({children}) => {
	return (
		<div 
			className="primaryButton"
			style={{ width: "100%", height: "50px" }}
		>
			{children}
		</div>
	);
};

export default LoginBanner;
