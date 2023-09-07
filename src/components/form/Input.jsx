import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, value, handleOnChange, multiple }) {
  return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            {...(multiple ? {multiple} : '')} // se o multiple veio imprime, se não, imprime vazio
        />
    </div>
  )
}

export default Input;
