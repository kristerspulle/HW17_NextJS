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
  comments: {
    id: string
    name: String,
    comment: String
  }[]
}

export const Blog = ({id, title, image, paragraph, isList = true, comments}: BlogProps): JSX.Element => {

  return (
    isList ? (
      <div className={styles.blog}>
        <Link href={`/blog/${id}`} className={styles.title}>{title}</Link>
        <Image className={styles.image} width={300} height={150} src={image} alt={title}/>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
    ) : (
      <div className={styles.blog}>
        <Link href={`/blog/${id}`} className={styles.title}>{title}</Link>
        <Image className={styles.image} width={300} height={150} src={image} alt={title}/>
        <div className={styles.paragraph}>{paragraph}</div>
        <div>Tags</div>
        <div className={styles.seperator}></div>
        <CommentForm/>
        <div className={styles.commentWrapper}>
          {comments.map((comment) => {
            return (
              <div className={styles.comment} key={id}>
                <div className={styles.commentAuthor}>{comment.name}</div>
                <div className={styles.commentText}>{comment.comment}</div>
              </div>
            )
          })}
        </div>
    </div>
    )
  )
}