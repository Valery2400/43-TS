import React from 'react'
import styles from "./header.module.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.header}> 
        <p>
       
      <Link className={location.pathname === '/homepage' ? styles.active : ''} to={'/homepage'}>Home page</Link>
        <Link className={location.pathname === '/star-wars-gallery' ? styles.active : ''} to={'/star-wars-gallery'}>starwars gallery</Link>
        <Link className={location.pathname === '/gender-form' ? styles.active : ''}to={'/gender-form'}>gender form</Link>
        <Link className={location.pathname === '/robot-form' ? styles.active : ''}to={'/robot-form'}>robot form</Link>
        <Link className={location.pathname === '/my-form' ? styles.active : ''}to={'/my-form'}>my form</Link>
        <Link className={location.pathname === '/counter' ? styles.active : ''}to={'/counter'}>counter</Link>
        <Link className={location.pathname === '/feedback' ? styles.active : ''}to={'/feedback'}>feedback</Link>

      
        </p>
    </header>
  )
}
