import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./layout.module.css";

function Layout() {
  const location = useLocation()
  console.log(location.pathname);
  
  return (
    
    <div className={styles.page}>
      <header className={styles.header}> 
      <Link className={location.pathname === '/homepage' ? styles.active : ''} to={'/homepage'}>Home page</Link>
        <Link className={location.pathname === '/star-wars-gallery' ? styles.active : ''} to={'/star-wars-gallery'}>starwars gallery</Link>
        <Link className={location.pathname === '/gender-form' ? styles.active : ''}to={'/gender-form'}>gender form</Link>
        <Link className={location.pathname === '/robot-form' ? styles.active : ''}to={'/robot-form'}>robot form</Link>
        <Link className={location.pathname === '/my-form' ? styles.active : ''}to={'/my-form'}>my form</Link>
        <Link className={location.pathname === '/counter' ? styles.active : ''}to={'/counter'}>counter</Link>
        <Link className={location.pathname === '/feedback' ? styles.active : ''}to={'/feedback'}>feedback</Link>

      </header>

      <main className={styles.main}>  
      <Outlet/>
      </main>
      <footer className={styles.footer}> footer </footer>
   
    </div>
    
  );
}
export default Layout;
