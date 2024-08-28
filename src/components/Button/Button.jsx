import styles from './Button.module.css'
function Button({
  children,
  handleClick,
  btnstyle = "primary",
  shadow = false,
  type = "button",
}) {
  return (
    <button type={type} 
    onClick={handleClick}
    className={`${styles.button} ${styles[btnstyle]} ${shadow && styles.shadow}`}
    >
      {children}
    </button>
  )
}

export default Button;