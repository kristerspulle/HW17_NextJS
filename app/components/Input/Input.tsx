import { ChangeEvent } from 'react';
import styles from './Input.module.css';

type InputProps = {
  type: HTMLInputElement['type'];
  placeholder: string;
  label?: string;
  required: boolean;
  name: string;
  value: string;
  onChange?: (e) => void;
};

export const Input = ({
  type,
  name,
  label,
  required,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
      />
    </div>
  );
};
