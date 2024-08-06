import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./layout.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect } from "react";
import { getUserWithToken } from "../../features/auth/authAction";
import { useAppDispatch } from "../../redux/hooks";




function Layout() {
  // const dispath = useAppDispatch()
  
  // useEffect(() => {
  //   const token = localStorage.getItem('user-token')
  //  if (token) !== null { 
  //   dispath(getUserWithToken(token))
  // }
    
  // }, []);
  
  
  return (
    
    <div className={styles.page}>
  <Header/>

      <main className={styles.main}>  
<Outlet/>
      </main>
     
   <Footer/>
    </div>
    
  );
}
export default Layout;
