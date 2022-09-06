import { useState } from 'react';
import { useAppDispatch } from '../../../hook';
import { Input } from '../../Input/input';
import styles from './login.module.css';

export const Login = () => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const onChangeLogin = () => {

  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form className={styles.form}>
        <p>
          To log in get registered
          <a
            href={'https://social-network.samuraijs.com/'}
            target={'_blank'}
          >
            here
          </a>
        </p>
        <p>or use common test account credentials:</p>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p>
        <Input type='email' placeholder={'email'}  onChange={(e) => console.log(e)}/>
        <Input type='password' placeholder={'password'} />
        <button className={styles.buttonLogin} type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};
