'use client'

import { Blog } from '../components/BlogCard/BlogCard';
import { Button } from '../components/Button/Button';

type Blog = {
  _id: string;
  title: string;
  image: string;
  paragraph: string;
  tag: {
    tag: string;
  };
};

type ServerBlogProps = {
  blogs: Blog[]
}

const deleteBlog = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    method: 'DELETE',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`);
  }
  return res.json();
};

const ServerBlogs = ({blogs}: ServerBlogProps) => {

  return (
    <div>
      {blogs.map((blog: Blog) => {
        return (
          <div key={blog._id}>
            <Blog
              id={blog._id}
              title={blog.title}
              image={blog.image}
              paragraph={blog.paragraph}
              isList={true}
              tag={blog.tag.tag}
            />
            <Button type="button" text="Delete" onClick={() => deleteBlog(blog._id)}/>
            <Button type="button" text="Edit" />
          </div>
        );
      })}
    </div>
  );
};

export default ServerBlogs;