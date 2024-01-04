'use client';

import { DeleteCommentButton } from '@/app/components/Button/Button';
import Comment from '@/app/components/Comment/Comment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

type serverCommentProps = {
  comments: Comment[];
};

type Comment = {
  _id: string;
  name: string;
  comment: string;
  createdAt: Date;
  blog?: {
    _id: string;
    title: string;
  };
};

const ServerComments = ({ comments }: serverCommentProps) => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      {comments.map((comment: Comment) => (
        <div key={comment._id} className={styles.commentWrapper}>
          <Comment
            _id={comment._id}
            name={comment.name}
            comment={comment.comment}
            createdAt={comment.createdAt}
          />
          <div className={styles.linkWrapper}>
            <Link href={`/blog/${comment.blog?._id}`}>{comment.blog?.title}</Link>
            <DeleteCommentButton
              type="button"
              text="Delete"
              id={comment._id}
              onClick={() => {
                router.refresh();
              }}
          />
          </div>
        </div>
      ))}
    </div>
  )
};

export default ServerComments;