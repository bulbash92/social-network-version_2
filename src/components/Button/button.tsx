import styles from './button.module.css'

interface ButtonProps {
    value: string;
    onClick?: () => void;
    type: string;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> =({value, onClick, type, disabled, ...props}) => {
    const buttonStyle = disabled ? styles.buttonSecondary : styles.buttonPrimary;
    return (
        <button className={buttonStyle} onClick={onClick} disabled={disabled} {...props}>{value}</button>
    )
}