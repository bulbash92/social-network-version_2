import styles from './input.module.css'

interface InputProps  {
    type: string,
    placeholder?: string,
    containerStyle?: string
}

export const Input:React.FC<InputProps> = ({type, placeholder, containerStyle}) => {
    const inputStyle = containerStyle ? containerStyle : styles.input
    return (
        <>
        <input  className={inputStyle} type={type} placeholder={placeholder}/>
        </>
    )
}