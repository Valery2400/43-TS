// import "./myButton.css";
import { log } from 'console';
import styles from './myButton.module.css'

console.log(styles);


interface IMyButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  name?: string;
}

export default function MyButton({
  type = "button",
  onClick,
  name = "default",
}: IMyButtonProps) {
  return (
    <button type={type} onClick={onClick} className={styles.myButton}>
      {name}
    </button>
  );
}
