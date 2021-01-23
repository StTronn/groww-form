import validate from "./validate.js";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

const Func = () => {
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate,
		onSubmit: (values) => {
			history.push("/details");
		},
	});
	return formik;
};

export default Func;
