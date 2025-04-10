import { ErrorMessage, Formik, Form, Field } from "formik";
import css from "./LoginPage.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginPage()
{
    const dispatch = useDispatch();
    const userSchema = Yup.object().shape({
        email: Yup.string().required("User email cannot be empty"),
        password: Yup.string().required("User password cannot be empty")
    });

    const onLogin = (values, actions) => {
        dispatch(login(values));
        actions.resetForm();
    }

    return (
        <div className={css.wrapper}>
            <h1 className={css.header}>Log In</h1>
            <Formik initialValues={{
                email: "",
                password: ""
            }} onSubmit={onLogin} validationSchema={userSchema}>
                <Form className={css.form}>
                    <label className={css.label}>
                        E-Mail <Field type="email" name="email" />
                        <ErrorMessage name="email" component="p" className={css.error} />
                    </label>
                    <label className={css.label}>
                        Password <Field type="password" name="password" />
                        <ErrorMessage name="password" component="p" className={css.error} />
                    </label>
                    <button type="submit" className={css.button}>Log In</button>
                </Form>
            </Formik>
        </div>
    )
}