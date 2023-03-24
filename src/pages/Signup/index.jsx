import { Field, Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { signinFetch, signupFetch } from "../../api/user";

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required '),
    email: Yup.string().email('Invalid email').required('Required '),
    group: Yup.string()
        .min(4, 'Too Short!')
        .max(5, 'Too Long!')
        .required('Required '),
});

export const Signup = () => {

    const navigate = useNavigate()

    const initialValues = {
        password: '',
        email: '',
        group: '9-gr'
    }

    const onSubmit = async (values) => {
        const res = await signupFetch(values)

        if (res.ok) {
            const resAuth = await signinFetch({email: values.email, password: values.password})

            if (resAuth.ok) {
                const responceAuth = await resAuth.json()
                localStorage.setItem('token', responceAuth.token)
                return navigate('/products')
            }
            return alert('Что то пошло не так')


        }
        return alert('Что то пошло не так')
    }

    return (
        <div>
            <h1>регайся</h1>
            <div className="card">
                <div className="img_wrap">
                    <div className="container">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignUpSchema}
                            onSubmit={onSubmit}
                        >
                            <Form className="Form1">
                                <label htmlFor="email">Email </label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="jane@acme.com"
                                    type="email"
                                />
                                <ErrorMessage name="email" />

                                <label htmlFor="password">Пароль </label>
                                <Field id="password" name="password" type="password" placeholder="Пароль" />
                                <ErrorMessage name="password" />

                                <label htmlFor="group">Группа </label>
                                <Field id="group" name="group" placeholder="Группа" />
                                <ErrorMessage name="group" />

                                <button type="submit" className="btn">Регнуться</button>
                                <p>Уже есть аккаунт? <Link to={"/signin"}>Заходи </Link></p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}