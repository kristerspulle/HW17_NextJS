'use client';
import styles from './CommentForm.module.css';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const initFormValue = {
  name: '',
  comment: '',
};
export const CommentForm = () => {
  const [formValue, setFormValue] = useState(initFormValue);
  const params = useParams<{ id: string }>();
  const router = useRouter()

  const postComment = async (id: string) => {
    const comment = await fetch(
      `http://localhost:3000/api/blogs/${id}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formValue),
      }
    );
    return comment.json();
  };

  return (
    <form
      className={styles.form}
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        postComment(params.id);
        setFormValue(initFormValue);
        router.refresh();
      }}
    >
      <Input
        type="text"
        placeholder="Author"
        name="author"
        label="Your name"
        required
        value={formValue.name}
        onChange={(e) => {
          setFormValue({ ...formValue, name: e.target.value });
        }}
      />
      <TextArea
        placeholder="Comment"
        name="comment"
        label="Your comment"
        value={formValue.comment}
        onChange={(e) => {
          setFormValue({ ...formValue, comment: e.target.value });
        }}
        required
      />
      <Button type="submit" text="Add comment" id='addComment'/>
    </form>
  );
};

// const postUser = async (user) => {
//   const comment = await fetch(`http://localhost:3000/api/user`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   })
//   return comment.json();
// }
// postUser({
//   username: 'Admin',
//   password: 'password'
// })
