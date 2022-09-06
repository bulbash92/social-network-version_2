import { ChangeEvent } from 'react'
import styles from './input.module.css'

interface InputProps  {
    type: string,
    placeholder?: string,
    containerStyle?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string
}

export const Input:React.FC<InputProps> = ({type, placeholder, containerStyle, onChange, value}) => {
    const inputStyle = containerStyle ? containerStyle : styles.input
    return (
        <>
        <input value={value}  className={inputStyle} type={type} placeholder={placeholder} onChange={onChange}/>
        </>
    )
}