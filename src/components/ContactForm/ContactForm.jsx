import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export default function ContactForm()
{
    const dispatch = useDispatch();
    const handleSubmit = ({ name, number }, actions) => {
        dispatch(addContact({
            name: name.trim(),
            number: number
        })).unwrap()
            .then(() => toast.success(`Contact ${name.trim()} successfully added!`))
            .catch(() => toast.error(`Something went wrong during adding contact ${name.trim()} - try refresh this page`));
        actions.resetForm();
    };

    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Field cannot be empty!"),
        number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Field cannot be empty!")
    });

    return (
        <Formik initialValues={{
            name: '',
            number: ''
        }} onSubmit={handleSubmit} validationSchema={contactSchema}>
            <Form className={css.form}>
                <label className={css.label}>
                    Name <Field type="text" name="name" />
                    <ErrorMessage name="name" component="p" className={css.error} />
                </label>
                <label className={css.label}>
                    Number <Field type="tel" name="number" />
                    <ErrorMessage name="number" component="p" className={css.error} />
                </label>
                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}