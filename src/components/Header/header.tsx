import { Navigate, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hook';
import styles from './header.module.css';
import { User } from './userBlock/user';

const Header = () => {
  const {isAuth, login} = useAppSelector(state => state.auth)
  const navigate = useNavigate()
  const loginHandler = () => {
    navigate('/login')
  }

  const logoutHandler = () => {
    navigate('/login')
  }

  console.log(login)
  return <header className={styles.header}>
    <div>LOGO</div>
    <h1>MySocial</h1>
  <User isAuth={isAuth} login={login} logout={logoutHandler} onClickLogin={loginHandler}/>
  </header>;
};

export default Header;
