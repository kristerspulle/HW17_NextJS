import styles from './page.module.css';
import { Blog } from './components/BlogCard/BlogCard';

type Blog = {
  _id: string,
  title: string,
  image: string,
  paragraph: string
}

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blogs', {
    cache: 'no-store'
  })
  if(!res.ok) {
    console.log(res);
  } else {
    return res.json()
  }
}

const Home = async (): Promise<JSX.Element> => {
  const data = await getData();

  return (
    <main className={styles.main}>
      {data.map((blog: Blog) => (
        <Blog
          key={blog._id}
          id={blog._id}
          title={blog.title}
          image={blog.image}
          paragraph={blog.paragraph}/>
      ))}
    </main>
  )
}

export default Home;