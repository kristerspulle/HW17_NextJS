'use client'

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import  TextEditor  from '../TextEditor/TextEditor';
import { useState } from 'react';

const initBlogValues = {title: '', image: '', paragraph: ''}

const BlogForm = () => {
  const [blogForm, setBlogForm] = useState(initBlogValues)
  return (
    <form action='submit'>
      <Input type='text' placeholder='Blog title' required={false} name='blogTitle' value={blogForm.title}/>
      <Input type='text' placeholder='Blog image URL' required={false} name='blogImage' value={blogForm.image}/>
      <TextEditor />
      <Button type='submit' text='Add blog'/>
    </form>
  )
}

export default BlogForm;