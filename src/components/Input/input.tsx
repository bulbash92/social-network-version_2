import { ChangeEvent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormInputsType } from '../pages/Login/login';
import styles from './input.module.css';

interface InputProps {
  type?: string;
  placeholder?: string;
  containerStyle?: string;
  value?: string;
  register: UseFormRegister<FormInputsType>;
  id: 'email' | 'password' | 'captcha';
}

export const InputForm: React.FC<InputProps> = ({
  type,
  placeholder,
  containerStyle,
  value,
  register,
  id,
  ...props
}) => {
  const inputStyle = containerStyle ? containerStyle : styles.input;
  return (
    <>
      <input
        className={inputStyle}
        {...register(id)}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </>
  );
};
