import { redirect } from 'next/navigation';
import { authOptions } from '@api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import ServerBlogs from './serverBlogs'

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

  if (!session) {
    redirect('api/auth/signin?callbackUrl=/protected');
  }

  return (
    <main>
      <ServerBlogs blogs={data}/>
    </main>
  );
};

export default ProtectedPage;
