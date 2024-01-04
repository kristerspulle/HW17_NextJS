import ServerComments from './ServerComments'

export const getCommentData = async () => {
  const res = await fetch(`http://localhost:3000/api/blogs/comments`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`);
  }
  return res.json();
};

const ProtectedComments = async () => {
  const comments = await getCommentData();

  return (
    <ServerComments comments={comments}/>
  )
}
export default ProtectedComments;


