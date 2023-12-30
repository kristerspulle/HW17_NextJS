'use client'

import { signOut } from 'next-auth/react'
import styles from './Button.module.css'

type ButtonProps = {
  type: HTMLButtonElement['type'],
  text: string,
  onClick?: () => void
}

// const deleteComment = async () => {
//   const res = await fetch(`http://localhost:3000/api/blogs/comments`, {
//     method: 'DELETE',
//     cache: 'no-store'
//   })
//   if(!res.ok) {
//     throw new Error(`Failed to fetch data. Status: ${res.status}`)
//   }
//   return res.json()
// }


export const Button = ({type = 'button', text, onClick}: ButtonProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <button type={type} className={styles.button} onClick={onClick}>{text}</button>
    </div>
  )
}

export const SignOutButton = ({type}: ButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonSignOut} type={type} onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
};

export const DeleteButton = ({type, onClick}: ButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonDelete} type={type} onClick={onClick}>
        Delete comment
      </button>
    </div>
  );
};

