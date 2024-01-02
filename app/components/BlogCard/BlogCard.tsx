import Image from 'next/image';
import styles from './BlogCard.module.css';
import Link from 'next/link';
import { CommentForm } from '../CommentForm/CommentForm';
import { authOptions } from '@api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { formatDistanceToNow } from 'date-fns';

type BlogProps = {
  id: string;
  title: string;
  image: string;
  paragraph: string;
  isList: boolean;
  comments?: {
    id: string;
    name: String;
    comment: String;
    createdAt: Date;
  }[];
  tag: string;
};

export const Blog = async ({
  id,
  title,
  image,
  paragraph,
  isList = true,
  comments,
  tag,
}: BlogProps) => {
  const session = await getServerSession(authOptions);
  return isList ? (
    <div className={styles.blog}>
      <Link
        href={session ? `/protected/${id}` : `/blog/${id}`}
        className={styles.title}
      >
        {title}
      </Link>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          width={600}
          height={300}
          src={image}
          alt={title}
        />
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
      <div className={styles.tag}>{tag}</div>
    </div>
  ) : (
    <div className={styles.blog}>
      <Link
        href={session ? `/protected/${id}` : `/blog/${id}`}
        className={`${styles.title} + ${styles.oneBlog}`}
      >
        {title}
      </Link>
      <Image
        className={styles.image}
        width={600}
        height={300}
        src={image}
        alt={title}
      />
      <div className={styles.paragraph}>{paragraph}</div>
      <div className={styles.tag}>{tag}</div>
      <div className={styles.seperator}></div>
      <CommentForm />
      <div className={styles.commentWrapper}>
        {comments?.map((comment) => {
          return (
            <div className={styles.comment} key={comment.id}>
              <div className={styles.commentAuthor}>{comment.name}</div>
              <div className={styles.commentText}>{comment.comment}</div>
              <div className={styles.commentDate}>
                {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
