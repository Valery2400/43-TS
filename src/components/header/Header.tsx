import {links} from "./links"
import React from 'react'
import styles from "./header.module.css"
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
  console.log(location.pathname);
  return (
    <header className={styles.header}> 
        <p>
       {links.map((el,index) => (
           <Link className={location.pathname === el.pathname ? styles.active : ''} 
           to={el.pathname}>{el.title}</Link>
       ))}
             
        </p>
    </header>
  );
}
