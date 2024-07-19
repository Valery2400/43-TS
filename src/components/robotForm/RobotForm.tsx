import React from "react";
import styles from "./robotForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

// типизация значений в форме
interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

export default function RobotForm() {
  const schema = Yup.object().shape({
    model: Yup
    .number()
    .typeError('введи свой номер робот')
    .required('напиши свою модель')
    .min(100, "модель должна быть больше 100")
    .max(1000, "ты не такой робот! модель должна быть до 1000..."),
    creator: Yup
    .string()
    .required("скажи кто твой создатель"),
    email: Yup
    .string()
    .email('uncorrect format')
    .required('need email'),
  });

  const formik = useFormik({
    // передаем начальное значение
    //
    initialValues: {
      model: "",
      creator: "",
      email: "",
    } as IFormValues,
    validationSchema: schema,
    // описываеи действие с данными при нажатии на кнопку стиеом submit
    validateOnChange: false,
    onSubmit: (values: IFormValues) => {
      //проверяем, что к нам пришли значения из формы
      console.log(values);
    },
  });

  return (
    <>
    

    
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <label> Это форма для робота </label>
      <input
        value={formik.values.model}
        name="model"
        onChange={formik.handleChange}
        type="text"
        placeholder="ваша модель"
      />
      <input
        value={formik.values.creator}
        name="creator"
        onChange={formik.handleChange}
        type="text"
        placeholder="имя создателя"
      />
      <input
        value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        type="text"
        placeholder="email производителя"
      />
      <button type="submit">отправить</button>
    

    </form>
 <span className={styles.errors}>{formik.errors.model}</span>
 <span className={styles.errors}>{formik.errors.creator}</span>
 <span className={styles.errors}>{formik.errors.email}</span>
 </>
  );
}
