import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import routes from "../../../../router/webRoutes";

import validate from "./validate";


const useForm = () => {
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			pan:"",
			name: "",
			mobile:"",
			dob: "",
		},
		validationSchema:validate,
		onSubmit: (values) => {
			history.push(routes.BANK_DETAILS);
		},
	});
	return formik;
};

export default useForm;
