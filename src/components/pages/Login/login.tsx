import { ChangeEvent, MouseEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hook';
import { Auth } from '../../../services/auth/auth';
import { login } from '../../../store/authSlice';
import { Button } from '../../Button/button';
// import { setUserData } from '../../../store/authSlice';
import { InputForm } from '../../Input/input';
import styles from './login.module.css';
export type FormInputsType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

export const Login = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.auth);
  const { isAuth, captchaUrl } = data!;
  const { error, status } = useAppSelector((state) => state.app);
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
        <InputForm
          register={register}
          type='email'
          id='email'
          placeholder={'Email...'}
        />
        <div className={styles.textBlock}>
          {errors.email?.message}
        </div>
        <InputForm
          register={register}
          id='password'
          type={'password'}
          placeholder={'Password...'}
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

        <Button
          disabled={status === 'loading'}
          value={'Login'}
          type={'submit'}
        />
      </form>
    </div>
  );
};
