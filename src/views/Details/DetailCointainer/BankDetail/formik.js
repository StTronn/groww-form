import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import routes from "../../../../router/webRoutes";

import validate from "./validate.js";



const useForm = () => {
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			pan: null,
			bNo: null,
			ifsc: null,
			bName: "",
		},
		validate,
		onSubmit: (values) => {
			history.push(routes.DETAIL);
		},
	});
	return formik;
};

export default useForm;
