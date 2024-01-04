'use client';

import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import TextEditor from '../TextEditor/TextEditor';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './BlogForm.module.css'

const initBlogFormValues = { title: '', image: '', paragraph: '', tag: '' };

const BlogForm = (): JSX.Element => {
  const [blogFormValues, setBlogFormValues] = useState(initBlogFormValues);
  const url = usePathname()

  const postBlog = async () => {
    const newBlog = await fetch(`http://localhost:3000/api/blogs`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({...blogFormValues}),
    });
    return newBlog.json();
  };

  const editBlog = async (id: string) => {
    const editBlog = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({...blogFormValues})
    })
  }

  const handlePageEditorStateChange = (contentState: EditorState): void => {
    setBlogFormValues({
      ...blogFormValues,
      paragraph: draftToHtml(convertToRaw(contentState.getCurrentContent())),
    });
  };

  return (
    <form
      className={styles.form}
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        postBlog();
        setBlogFormValues(initBlogFormValues);
      }}
    >
      {url === '/protected/newblog' ? (<div>Add a new blog</div>) : (<div>Edit blog</div>)}
      <div className={styles.inputWrapper}>
      <Input
        type="text"
        placeholder="Blog title"
        required={false}
        name="blogTitle"
        value={blogFormValues.title}
        onChange={(e) => {
          setBlogFormValues({ ...blogFormValues, title: e.target.value });
        }}
      />
      <Input
        type="text"
        placeholder="Blog image URL"
        required={false}
        name="blogImage"
        value={blogFormValues.image}
        onChange={(e) => {
          setBlogFormValues({ ...blogFormValues, image: e.target.value });
        }}
      />
      </div>
      <TextEditor onEditorStateChange={handlePageEditorStateChange} />
      <Select
        onChange={(choice) =>
          setBlogFormValues({ ...blogFormValues, tag: choice._id })
        }
      />
      {url === '/protected/newblog' ? (
        <Button type="submit" text="Add blog" id="addblog" />
      ) : (
        <Button type="submit" text="Save changes" id="editBlog" />
      )}
    </form>
  );
};

export default BlogForm;
