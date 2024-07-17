import React from "react";
import styles from "./lesson11.module.css"
import LoginForm from "../../components/loginForm/LoginForm";
const Lesson11 = () => {
  return ( 
    <div className='lesson-container'>
    <div className={styles.loader}></div>

    <h3 className={styles.heading}>
    Lesson11</h3> 
    <p>Библиотека для работы с формами Formik</p>
    <p><LoginForm /></p>
    </div>
)
}
export default Lesson11
