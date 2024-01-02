import styles from './Comment.module.css';
import { formatDistanceToNow } from 'date-fns';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; 
import { getServerSession } from 'next-auth';

type CommentProps = {
  _id: string;
  name: string;
  comment: string;
  createdAt: Date;
  blog?: {
    _id: string;
    title: string;
  };
};

const Comment = async ({_id, name, comment, createdAt, blog,}: CommentProps) => {
  // const session = await getServerSession(authOptions);
  return  (
    <div className={styles.comment} key={_id}>
      <div className={styles.commentAuthor}>{name}</div>
      <div className={styles.commentText}>{comment}</div>
      <div className={styles.wrapper}>
        <div>{formatDistanceToNow(createdAt, { addSuffix: true })}</div>
        <div>{blog?.title}</div>
      </div>
    </div>
  // ) : (
  //   <div className={styles.comment} key={_id}>
  //     <div className={styles.commentAuthor}>{name}</div>
  //     <div className={styles.commentText}>{comment}</div>
  //     <div className={styles.wrapper}>
  //       <div>{formatDistanceToNow(createdAt, { addSuffix: true })}</div>
  //     </div>
  //   </div>
  )
};

export default Comment;
