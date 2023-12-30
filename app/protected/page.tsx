import { redirect } from 'next/navigation';
import { authOptions } from '@api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { Blog } from '../components/BlogCard/BlogCard';

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

const ProtectedPage = async () => {
  const session = await getServerSession(authOptions);
  const data = await getData();
  console.log(session);
  if (!session) {
    redirect('api/auth/signin?callbackUrl=/protected');
  }

  return (
    <>
      <p>hi, {session.user?.username ?? 'friend'}</p>
      <div className="main">
        {data.map((blog: Blog) => {
          return (
            <Blog
              key={blog._id}
              id={blog._id}
              title={blog.title}
              image={blog.image}
              paragraph={blog.paragraph}
              isList={true}
              tag={blog.tag.tag}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProtectedPage;
