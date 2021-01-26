const validate = (values) => {
	const errors = {};
	if (
		!values.email ||
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Invalid Email adress";
	}

	if (!values.password) {
		errors.password = "required";
	}
	return errors;
};

export default validate;
