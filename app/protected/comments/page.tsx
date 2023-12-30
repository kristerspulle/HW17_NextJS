'use client';

import { DeleteButton } from '@/app/components/Button/Button';
import styles from '@components/BlogCard/BlogCard.module.css';
import { use } from 'react';

const getCommentData = async () => {
  const res = await fetch(`http://localhost:3000/api/blogs/comments`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`);
  }
  return res.json();
};

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

const ProtectedComments = () => {
  const comments = use(getCommentData());

  return comments?.map(
    (comment: {
      _id: string;
      name: string;
      comment: string;
      createdAt: Date;
    }) => {
      return (
        <div className={styles.comment} key={comment._id}>
          <div className={styles.commentAuthor}>{comment.name}</div>
          <div className={styles.commentText}>{comment.comment}</div>
          <div>{comment.createdAt.toString()}</div>
          <DeleteButton
            type="button"
            text="Delete"
            onClick={() => deleteComment(comment._id)}
          />
        </div>
      );
    }
  );
};
export default ProtectedComments;
