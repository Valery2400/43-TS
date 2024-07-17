import React from "react";
import styles from "./lesson11.module.css"
import LoginForm from "../../components/loginForm/LoginForm";
import FormGender from "../../components/formGender/FormGender";
const Lesson11 = () => {
  return ( 
    <div className='lesson-container'>
    <div className={styles.loader}></div>

    <h3 className={styles.heading}>
    FormGender</h3> 
    {/* <p>компонент FormGender</p> */}
    {/* <LoginForm /> */}
    <br />
    <FormGender />
    </div>
)
}
export default Lesson11
