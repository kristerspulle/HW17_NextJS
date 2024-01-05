import { Blog } from '../components/BlogCard/BlogCard';
import styles from './page.module.css';

type Blog = {
  _id: string;
  title: string;
  image: string;
  paragraph: string;
  tag: {
    _id: string;
    tag: string;
  };
};

const getBlogsByTag = async (id: string) => {
  const blogsByTag = await fetch(`http://localhost:3000/api/tags/${id}`, {
    cache: 'no-store',
  });
  if (!blogsByTag.ok) {
    throw new Error(`Failed to fetch data. Status: ${blogsByTag.status}`);
  }
  return blogsByTag.json();
};

const BlogsByTag = async ({ params }: { params: { tagid: string } }) => {
  const blogsByTag = await getBlogsByTag(params.tagid);

  return (
    <main className={styles.main}>
      {blogsByTag.map((blog: Blog): JSX.Element => (
        <Blog
          key={blog._id}
          id={blog._id}
          title={blog.title}
          image={blog.image}
          paragraph={blog.paragraph}
          isList={true}
          tag={blog.tag}
        />
      ))}
    </main>
  );
};

export default BlogsByTag;
