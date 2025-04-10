import { ErrorMessage, Formik, Form, Field } from "formik";
import css from "../LoginPage/LoginPage.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations";

export default function RegisterPage()
{
    const dispatch = useDispatch();
    const userSchema = Yup.object().shape({
        name: Yup.string().min(5, "Too short!").max(50, "Too long!").required("User name cannot be empty!"),
        email: Yup.string().min(5, "Specified email is not valid!").required("User email cannot be empty"),
        password: Yup.string().min(10, "Too weak password").required("User password cannot be empty")
    });

    const onSignUp = (values, actions) => {
        dispatch(signUp(values));
        actions.resetForm();
    }

    return (
        <div className={css.wrapper}>
            <h1 className={css.header}>Sign Up</h1>
            <Formik initialValues={{
                name: "",
                email: "",
                password: ""
            }} onSubmit={onSignUp} validationSchema={userSchema}>
                <Form className={css.form}>
                    <label className={css.label}>
                        User name <Field type="text" name="name" />
                        <ErrorMessage name="name" component="p" className={css.error} />
                    </label>
                    <label className={css.label}>
                        E-Mail <Field type="email" name="email" />
                        <ErrorMessage name="email" component="p" className={css.error} />
                    </label>
                    <label className={css.label}>
                        Password <Field type="password" name="password" />
                        <ErrorMessage name="password" component="p" className={css.error} />
                    </label>
                    <button type="submit" className={css.button}>Sign Up</button>
                </Form>
            </Formik>
        </div>
    )
}