import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'

const productSchema = Yup.object().shape({
  discount: Yup.number().required('Required ').default(0).moreThan(-1, 'любое число начиная с 0'),
  stock: Yup.number().required('Required ').default(1).positive(),
  available: Yup.boolean().default(false),
  pictures: Yup.string().url('Invalid url').required('Required '),
  isPublished: Yup.boolean().default(false),
  name: Yup.string().min(4, 'минимум 4 буквы').max(60, 'напиши имя короче').required('Required '),
  price: Yup.number().required('Required ').positive(),
  wight: Yup.string().max(10, 'напиши другой вес').required('Required '),
  description: Yup.string().min(10, 'опиши подробнее').max(400, 'напиши короче').required('Required '),


});

export const ProductForm = ({ onSubmit }) => {

  const initialValues = {
    discount: "",
    stock: "",
    available: false,
    pictures: "https://react-learning.ru/image-compressed/1.jpg",
    isPublished: false,
    name: "",
    price: "",
    wight: "",
    description: "",
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={productSchema}
      onSubmit={onSubmit}
    >
      <Form className="ProductForm">

        <div className="str">
          <Field
            name="discount"
            placeholder="Скидка"
            type="number"
          />
          <ErrorMessage name="discount" />

          <Field
            name="stock"
            placeholder="Количество товара"
            type="number"
          />
          <ErrorMessage name="stock" />

          <Field
            name="price"
            placeholder="Цена"
            type="number"
          />
          <ErrorMessage name="price" />

          <Field
            name="pictures"
            placeholder="Изображение"
            type="text"
          />
          <ErrorMessage name="pictures" />

          <Field
            name="name"
            placeholder="Название товара"
            type="text"
          />
          <ErrorMessage name="name" />

          <Field
            name="wight"
            placeholder="Вес"
            type="text"
          />
          <ErrorMessage name="wight" />

          <Field
            as="textarea"
            name="description"
            placeholder="Описание"
            type="text"
          />
          <ErrorMessage name="description" />
        </div>

        <div className="str">
          <label className="checkbox">
            is Published?<Field type="checkbox" name="isPublished" />
            <ErrorMessage name="isPublished" />
          </label>
        </div>

        <div className="str">
          <label className="checkbox">
            is Available?<Field type="checkbox" name="available" />
            <ErrorMessage name="available" />
          </label>
        </div>

        <button className="btn" type="submit">Создать продукт</button>

      </Form>
    </Formik>
  )
}