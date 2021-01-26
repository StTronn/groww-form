import validate from "./validate.js";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import routes from "../../../router/webRoutes";

const useForm = () => {
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate,
		onSubmit: (values) => {
			history.push(routes.DETAIL);
		},
	});
	return formik;
};

export default useForm;
