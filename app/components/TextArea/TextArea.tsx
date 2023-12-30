import styles from './TextArea.module.css'

type TextAreaProps = {
  name: string,
  required: boolean,
  placeholder: string,
  value: string,
  onChange?: (e) => void,
  label?: string
}

export const TextArea = ({name, label, required = true, placeholder, value, onChange}: TextAreaProps ) => {
  return(
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <textarea
        className={styles.textarea} 
        required
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    </div>
  )
}