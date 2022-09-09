import { Link, NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

type ActiveType = {
  [key: string]: boolean;
};
const Navbar = () => {
  const linkClassName = ({ isActive }: ActiveType) =>
    isActive ? styles.active : styles.item;
  return (
    <nav className={styles.navbar}>
      <div className={styles.item}>
        <NavLink to='/' className={linkClassName}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/dialogs' className={linkClassName}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/users' className={linkClassName}>
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/news' className={linkClassName}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/settings' className={linkClassName}>
          Music
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
