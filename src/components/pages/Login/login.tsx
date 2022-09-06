import { ChangeEvent, MouseEvent, useState } from 'react';
import { useAppDispatch } from '../../../hook';
import { Input } from '../../Input/input';
import styles from './login.module.css';

export const Login = () => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const clearForm = () => {
    setPassword('');
    setLogin('');
  };

  const onClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(login + password);
    clearForm();
  };

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
        <Input
          value={login}
          type='email'
          placeholder={'email'}
          onChange={onChangeLogin}
        />
        <Input
          value={password}
          type='password'
          placeholder={'password'}
          onChange={onChangePassword}
        />
        <button
          onClick={onClickSubmit}
          className={styles.buttonLogin}
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  );
};
