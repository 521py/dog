import { useMutation } from "@tanstack/react-query";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { signinFetch } from "../../api/user";
import { setUser } from "../../redux/slices/user";

const signInSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required '),
  email: Yup.string().email('Invalid email').required('Required '),
});

export const Signin = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initialValues = {
    password: '',
    email: '',
  }

  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: async (values) => {
      const res = await signinFetch(values)
      if (res.ok) {
        const responce = await res.json();
        dispatch(setUser({
          ...responce.data,
          token: responce.token
        }))

        return navigate('/products')
      }

      return alert({ error })
    },
  })
  if (isLoading) return <p>Загрузка...</p>
  if (isError) return <p>Произошла ошибка: {error}</p>

  const onSubmit = async (values) => {
    await mutateAsync(values)
  }

  return (
    <div>
      <h1>заходи</h1>
      <div className="signwrap">
        <div className="img_wrap">
          <div className="container">
            <Formik
              initialValues={initialValues}
              validationSchema={signInSchema}
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


                <button type="submit" className="btn">Войти</button>
                <p>Ещё нет аккаунта? <Link to={"/signup"}>Регайся! </Link></p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}