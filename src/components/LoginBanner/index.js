import React from "react";
import LeftCointainer from "./LeftCointainer";
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
			<LeftCointainer />
			<RightCointainer />
		</div>
	);
};

export default LoginBanner;
