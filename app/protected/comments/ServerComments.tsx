'use client';

import { DeleteButton } from '@/app/components/Button/Button';
import Comment from '@/app/components/Comment/Comment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type serverCommentProps = {
  comments: Comment[];
};

type Comment = {
  _id: string;
  name: string;
  comment: string;
  createdAt: Date;
  blog?: {
    _id: string;
    title: string;
  };
};

const deleteComment = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/comments/${id}`, {
    method: 'DELETE',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`);
  }
  return res.json();
};

const ServerComments = ({ comments }: serverCommentProps) => {
  const router = useRouter();

  return comments.map((comment: Comment) => (
    <div key={comment._id}>
      <Comment
        _id={comment._id}
        name={comment.name}
        comment={comment.comment}
        createdAt={comment.createdAt}
      />
      <Link href={`/protected/${comment.blog?._id}`}>{comment.blog?.title}</Link>
      <DeleteButton
        type="button"
        text="Delete"
        onClick={() => {
          deleteComment(comment._id);
          router.refresh();
        }}
      />
    </div>
  ));
};

export default ServerComments;