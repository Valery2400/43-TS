import React from "react";
import styles from "./loginForm.module.css";
import { useFormik } from "formik";
// типизация значений в форме
interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export default function LoginForm() {
  const formik = useFormik({
    // передаем начальное значение
    //
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    } as IFormValues,
    // описываеи действие с данными при нажатии на кнопку стиеом submit
    onSubmit: (values: IFormValues) => {
      //проверяем, что к нам пришли значения из формы
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <input value={formik.values.firstName}
        name="firstName"
        onChange={formik.handleChange}
        type="text"
        placeholder="first name"
      />
      <input value={formik.values.lastName}
        name="lastName"
        onChange={formik.handleChange}
        type="text"
        placeholder="last name"
      />
      <input value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        type="text"
        placeholder="email"
      />
      <button type="submit">send</button>
    </form>
  );
}
