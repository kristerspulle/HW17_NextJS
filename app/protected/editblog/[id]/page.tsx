import BlogForm from '@components/BlogForm/BlogForm';
import styles from './page.module.css';

const getBlogData = async (id: string) => {
  console.log("Fetching data for blog with ID: ", id);
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: 'no-store'
  })
  if(!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`)
  } 

  return res.json()
}

const EditBlog = async ({params: {id}}: {params: { id: string} }) => {
  const blogData = await getBlogData(id)
  return (
    <div className={styles.wrapper}>
      <BlogForm blogData={blogData}/>
    </div>
  );
};

export default EditBlog;
