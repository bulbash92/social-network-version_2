import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { logout } from '../../store/authSlice';
import styles from './header.module.css';
import { User } from './userBlock/user';

const Header = () => {
  const {isAuth, login} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loginHandler = () => {
    navigate('/login')
  }

  const logoutHandler = () => {
    dispatch(logout())
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
