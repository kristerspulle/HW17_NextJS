import { Blog } from '../../components/BlogCard/BlogCard';
import styles from './page.module.css'

type Blog = {
  _id: string,
  title: string,
  image: string,
  paragraph: string
}

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: 'no-store'
  })
  if(!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`)
  } 
  return res.json()
}

const getCommentData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}/comments`, {
    cache: 'no-store'
  })
  if(!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`)
  } 
  return res.json()
}

const SingleBlog =  async ({params}: {params: { id: string} }) => {
  const dataBlog = await getData(params.id);
  const dataBlogComments = await getCommentData(params.id);

  
  return (
    <main className={styles.main}>
      <Blog
        id={dataBlog._id}
        title={dataBlog.title}
        image={dataBlog.image}
        paragraph={dataBlog.paragraph} 
        isList={false}
        comments={dataBlogComments}
        tag={dataBlog.tag.tag}
      />
    </main>
  )
}
export default SingleBlog;

