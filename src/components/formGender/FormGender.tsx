import React, { useState } from "react";
import styles from "./formGender.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IFormGender {
  name: string;
}

export default function FormGender() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("скажи name")
      .min(3, "name должно быть больше 2")
      .typeError("введи name for gender"),
  });

  const [gender, setGender] = useState("");
  const [nameOut, setNameOut] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
    } as IFormGender,
    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values: IFormGender, { resetForm }) => {
      fetch(`https://api.genderize.io/?name=${values.name}`)
        .then((res) => res.json())
        .then((data) => {
          setGender(data.gender);
          setNameOut(data.name);
          console.log(data);
          resetForm();
        });
    },
  });

  return (
    <>
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <input
        value={formik.values.name}
        name="name"
        onChange={formik.handleChange}
        type="text"
        placeholder="name"
      />

      <button type="submit">send</button>
      <br />
      {nameOut && (
        <span>
          Name: {nameOut} <br />
          Gender: {gender}
        </span>
      )}
    </form>
    <div className={styles.errorContainer}>
    <span className={styles.formErrors}>{formik.errors.name}</span>
    </div>
    </>
  );
}
