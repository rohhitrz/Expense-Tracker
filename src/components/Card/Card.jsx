import Button from "../Button/Button";
import styles from "./Card.module.css";

function Card({
  title,
  money,
  buttonText,
  buttonType,
  handleclick,
  success = True,
}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        {`${title}: `}
        <span
          className={success ? styles.success : styles.failure}
        >{`${money}`}</span>
      </h3>
      <Button handleClick={handleclick} style={buttonType}>
        {buttonText}
      </Button>
    </div>
  );
}


export default Card;