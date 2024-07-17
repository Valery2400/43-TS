import React, { useState } from "react";
import styles from "./formGender.module.css";
import { useFormik } from "formik";

interface IFormGender {
  name: string
  }

export default function FormGender() {
  const [gender, setGender] = useState("");
  const [nameOut, setNameOut] = useState("");
  const [isFill, setIsFill] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
    } as IFormGender,

    onSubmit: (values: IFormGender, { resetForm }) => {
        setIsFill(false);
      
      

      fetch(`https://api.genderize.io/?name=${values.name}`)
        .then((res) => res.json())
        .then((data) => {
          setGender(data.gender);
          setNameOut(data.name);
          setIsFill(true);
          resetForm();
          
        })
        .catch(() => {
          setIsFill(false);
        });


    },
  });

  return (
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
  );
}
