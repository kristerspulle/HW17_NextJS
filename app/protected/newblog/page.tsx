import BlogForm from '@/app/components/BlogForm/BlogForm';
import styles from './page.module.css'

const newBlog = () => {
  return (
    <div className={styles.wrapper}>
      <BlogForm/>
    </div>
  )
}

export default newBlog