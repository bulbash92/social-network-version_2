import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

type isActiveType = {
  isActive: boolean;
};

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.item}>
        <Link
          to='/profile'
          className={styles.item}
          
        >
          Profile
        </Link>
      </div>
      <div className={styles.item}>
        <Link to='/dialogs' className={styles.item}>
          Messages
        </Link>
      </div>
      <div className={styles.item}>
        <Link to='/home' className={styles.item}>
          Users
        </Link>
      </div>
      <div className={styles.item}>
        <Link to='/home' className={styles.item}>
          News
        </Link>
      </div>
      <div className={styles.item}>
        <Link to='/home' className={styles.item}>
          Music
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
