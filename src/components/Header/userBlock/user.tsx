import styles from '../header.module.css'


interface UserProps {
  login: string | null;
  isAuth: boolean;
  logout?: () => void;
  onClickLogin: () => void;
}

export const User: React.FC<UserProps> = ({
  login,
  isAuth,
  logout,
  onClickLogin,
}) => {
  return isAuth ? (
    <div>
      <div className={styles.login}>
        {login} 
      </div>
      <div>Logout</div>
    </div>
  ) : (
    <div ><button onClick={onClickLogin} type="button">Login</button></div>
  );
};
