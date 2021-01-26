import React from "react";
import LoginForm from "./LoginForm";
import RightCointainer from "./RightCointainer";
import "./index.css";

/*
 * Login Page Wrapper
 * LeftCointainer @renders the login form
 * Right Cointainer @renders img with desc
 */

const LoginBanner = () => {
	return (
		<div className="cointainer">
			<LoginForm />
			<RightCointainer />
		</div>
	);
};

export default LoginBanner;
