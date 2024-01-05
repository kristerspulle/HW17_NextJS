'use client'

import { signOut } from 'next-auth/react'
import styles from './Button.module.css'
import { useRouter } from 'next/navigation';

type ButtonProps = {
  type: HTMLButtonElement['type'],
  text: string,
  onClick?: () => void,
  id: string
}

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

export const DeleteCommentButton = ({type, onClick, text, id}: ButtonProps) => {
  const router = useRouter();
  const deleteComment = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/blogs/comments/${id}`, {
      method: 'DELETE',
      cache: 'no-store',
    });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    return res.json();
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonDelete} type={type} onClick={() => {
        deleteComment(id)
        router.refresh();
      }}>
        {text}
      </button>
    </div>
  );
};

export const DeleteBlogButton = ({type, text, id}: ButtonProps) => {

  const deleteBlog = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: 'DELETE',
      cache: 'no-store',
    });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    return res.json();
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonDelete} type={type} onClick={() => deleteBlog(id)}>
        {text}
      </button>
    </div>
  );
};

export const EditButton = ({text, type, id}: ButtonProps) => {
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonEdit} type={type} onClick={() => {router.push('/protected/editblog')}}>
        {text}
      </button>
    </div>
  );
}