import BlogForm from '@components/BlogForm/BlogForm';
import styles from './page.module.css'

const editBlog = () => {
  return (
    <div className={styles.wrapper}>
      <BlogForm />
    </div>
  );
};

export default editBlog;
