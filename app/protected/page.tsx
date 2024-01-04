import { redirect } from 'next/navigation';
import { authOptions } from '@api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { Blog } from '../components/BlogCard/BlogCard';
import { Button, DeleteBlogButton, EditButton } from '../components/Button/Button';
import { use } from 'react';
import styles from './page.module.css'

type Blog = {
  _id: string;
  title: string;
  image: string;
  paragraph: string;
  tag: {
    tag: string;
  };
};

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blogs', {
    cache: 'no-store',
  });
  if (!res.ok) {
    console.log(res);
  } else {
    return res.json();
  }
};

const ProtectedPage = () => {
  const session = use(getServerSession(authOptions));

  if (!session) {
    redirect('api/auth/signin?callbackUrl=/protected');
  }

  const data = use(getData());

  return (
    <main className={styles.main}>
      {data.map((blog: Blog) => {
        return (
          <div key={blog._id} className={styles.wrapper}>
            <Blog
              id={blog._id}
              title={blog.title}
              image={blog.image}
              paragraph={blog.paragraph}
              isList={true}
              tag={blog.tag.tag}
            />
            <div className={styles.buttonWrapper}>
              <DeleteBlogButton type="button" text="Delete Blog" id={blog._id} />
              <EditButton type="button" text="Edit Blog" id={blog._id} />
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ProtectedPage;
