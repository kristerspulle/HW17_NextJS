import Image from 'next/image';
import styles from './BlogCard.module.css';
import Link from 'next/link';
import { CommentForm } from '../CommentForm/CommentForm';
import Comments from '@components/Comment/Comment';
import parse from 'html-react-parser';

type BlogProps = {
  id: string;
  title: string;
  image: string;
  paragraph: string;
  isList: boolean;
  comments?: {
    id: string;
    name: string;
    comment: string;
    createdAt: Date;
  }[];
  tag: {
    _id: string,
    tag: string
  }
};

export const Blog = async ({id, title, image, paragraph,  isList = true, comments, tag}: BlogProps) => {
  return isList ? (
    <div className={styles.blog}>
      <div>
        <Link
          href={`/blog/${id}`}
          className={styles.title}
        >
          {title}
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            priority={true}
            className={styles.image}
            width={600}
            height={300}
            src={image}
            alt={title}
          />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.paragraph}>{(parse(paragraph.slice(0, 800)))}...</div>
          <Link href={`/${tag._id}`} className={styles.tag}>{tag.tag}</Link>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.blog}>
      <Link
        href={`/blog/${id}`}
        className={`${styles.title} + ${styles.oneBlog}`}
      >
        {title}({comments ? comments.length : 0})
      </Link>
      <Image
        priority={true}
        className={styles.image}
        width={600}
        height={300}
        src={image}
        alt={title}
      />
      <div className={styles.paragraph}>{parse(paragraph)}</div>
      <Link href={`/${tag._id}`} className={styles.tag}>{tag.tag}</Link>
      <div className={styles.seperator}></div>
      <CommentForm />
      <div className={styles.commentWrapper}>
        {comments?.map((comment) => {
          return (
            <Comments key={comment.id} _id={comment.id} name={comment.name} comment={comment.comment} createdAt={comment.createdAt}/>
          );
        })}
      </div>
    </div>
  );
};
