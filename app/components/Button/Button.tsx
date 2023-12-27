import styles from './Button.module.css'

type ButtonProps = {
  type: HTMLButtonElement['type'],
  text: string,
  onClick?: () => void
}

export const Button = ({type = 'button', text, onClick}: ButtonProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <button type={type} className={styles.button}>{text}</button>
    </div>
  )
}