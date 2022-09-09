import { ChangeEvent, MouseEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hook';
import { Auth } from '../../../services/auth/auth';
import { login } from '../../../store/authSlice';
// import { setUserData } from '../../../store/authSlice';
import { Input } from '../../Input/input';
import styles from './login.module.css';

export const Login = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.auth);
  const { isAuth, captchaUrl } = data!;
  const {error, status} = useAppSelector(state => state.app)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputsType>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
  });

  type FormInputsType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
  };

  const onSubmit: SubmitHandler<FormInputsType> = (
    data: FormInputsType,
  ) => {
    dispatch(login(data));
    reset();
  };
  console.log(isAuth);
  if (isAuth) return <Navigate to={'/'} />;

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder={'Email...'}
          {...register('email')}
        />
        <div className={styles.textBlock}>
          {errors.email?.message}
        </div>
        <input
          type={'password'}
          placeholder={'Password...'}
          className={styles.input}
          {...register('password')}
        />
        {captchaUrl ? (
          <div>
            <img src={captchaUrl} alt={'captcha'} />
            <div>
              <input
                className={styles.input}
                {...register('captcha')}
              />
            </div>
            <>
              {status === 'failed' && (
                <span className={styles.textBlock}>
                  {error
                    ? error
                    : errors.captcha && errors.captcha?.message}
                </span>
              )}
            </>
          </div>
        ) : error ? (
          <div className={styles.textBlock}>{error}</div>
        ) : (
          <div className={styles.textBlock}>
            {errors.password?.message}
          </div>
        )}
        <div>
          <input type={'checkbox'} {...register('rememberMe')} />
          Remember me
        </div>
        
          <button className={styles.buttonLogin} value={'Login'} type={'submit'} />
        
      </form>
    </div>
  );
};
