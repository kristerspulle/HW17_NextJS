import Image from 'next/image';
import styles from './BlogCard.module.css'
import Link from 'next/link';
import { CommentForm } from '../CommentForm/CommentForm';

type BlogProps = {
  id: string,
  title: string,
  image: string,
  paragraph: string,
  isList: boolean,
  comments?: {
    id: string
    name: String,
    comment: String,
    createdAt: Date
  }[],
  tag: string
}

export const Blog = ({id, title, image, paragraph, isList = true, comments, tag}: BlogProps): JSX.Element => {
  return (
    isList ? (
      <div className={styles.blog}>
        <Link href={`/blog/${id}`} className={styles.title}>{title}</Link>
        <div className={styles.wrapper}>
          <Image className={styles.image} width={600} height={300} src={image} alt={title}/>
          <div className={styles.paragraph}>{paragraph}</div>
        </div>
        <div>{tag}</div>
      </div>
    ) : (
      
      <div className={styles.blog}>
        <Link href={`/blog/${id}`} className={`${styles.title} + ${styles.oneBlog}`}>{title}</Link>
        <Image className={styles.image} width={600} height={300} src={image} alt={title}/>
        <div className={styles.paragraph}>{paragraph}</div>
        <div>{tag}</div>
        <div className={styles.seperator}></div>
        <CommentForm/>
        <div className={styles.commentWrapper}>
          {comments?.map((comment) => {
            return (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.commentAuthor}>{comment.name}</div>
                <div className={styles.commentText}>{comment.comment}</div>
                <div>{(comment.createdAt).toString()}</div>
              </div>
            )
          })}
        </div>
    </div>
    )
  )
}