import styles from './Comment.module.css';
import { formatDistanceToNow } from 'date-fns';

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

  return  (
    <div className={styles.comment} key={_id}>
      <div className={styles.commentAuthor}>{name}</div>
      <div>{comment}</div>
      <div className={styles.wrapper}>
        <div className={styles.createdAt}>{formatDistanceToNow(createdAt, {addSuffix: true})}</div>
        <div>{blog?.title}</div>
      </div>
    </div>
  )
};

export default Comment;
