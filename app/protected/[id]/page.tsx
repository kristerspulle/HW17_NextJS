import { Blog } from '@/app/components/BlogCard/BlogCard'
import { Button } from '@/app/components/Button/Button'

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: 'no-store'
  })
  if(!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`)
  } 
  return res.json()
}

const ProtectedSingleBlog = async ({params}: {params: { id: string} }) => {
  const dataBlog = await getData(params.id);
  return (
    <main>
      <Blog
        id={dataBlog._id}
        title={dataBlog.title}
        image={dataBlog.image}
        paragraph={dataBlog.paragraph} 
        isList={true}
        tag={dataBlog.Tags}
      />
      <Button type='button' text='Delete'/>
      <Button type='button' text='Edit'/>
    </main>
  )
}

export default ProtectedSingleBlog;