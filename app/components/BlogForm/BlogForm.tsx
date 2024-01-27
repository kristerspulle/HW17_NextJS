'use client';

import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Button, EditSaveButton } from '../Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import TextEditor from '../TextEditor/TextEditor';
import { useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import styles from './BlogForm.module.css';
import { useRouter } from 'next/navigation';

const initBlogFormValues = { title: '', image: '', paragraph: '', tag: '' };

const BlogForm = ({blogData}: any): JSX.Element => {
  const [blogFormValues, setBlogFormValues] = useState(initBlogFormValues);
  const [editFormValues, setEditFormValues] = useState(blogData)
  const url = usePathname();
  const { id } = useParams()
  const router = useRouter()
console.log(blogData);

  const postBlog = async () => {
    const newBlog = await fetch(`http://localhost:3000/api/blogs`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...blogFormValues }),
    });
    return newBlog.json();
  };

  const editBlog = async (id: string) => {
    const editBlog = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...editFormValues }),
    });

    return editBlog.json()
  };

  const handlePageEditorStateChange = (contentState: EditorState): void => {
    setBlogFormValues({
      ...blogFormValues,
      paragraph: draftToHtml(convertToRaw(contentState.getCurrentContent())),
    });
  };

  const handleEditStateChange = (contentState: EditorState): void => {
    setBlogFormValues({
      ...editFormValues,
      paragraph: draftToHtml(convertToRaw(contentState.getCurrentContent())),
    });
  };
  
  return url === `/protected/editblog/${id}` ? (
    <form
      className={styles.form}
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        editBlog(editFormValues._id);
        setEditFormValues(initBlogFormValues);
      }}
    >
      <div>Edit blog</div>
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          placeholder="Blog title"
          required={false}
          name="blogTitle"
          value={editFormValues.title}
          onChange={(e) => {
            setEditFormValues({ ...editFormValues, title: e.target.value });
          }}
        />
        <Input
          type="text"
          placeholder="Blog image URL"
          required={false}
          name="blogImage"
          value={editFormValues.image}
          onChange={(e) => {
            setEditFormValues({ ...editFormValues, image: e.target.value });
          }}
        />
      </div>
      <TextEditor onEditorStateChange={handleEditStateChange} initialContent={editFormValues.paragraph}/>
      <Select
        onChange={(choice, ) =>
          {console.log('choice', choice._id);
          
          setEditFormValues({ ...editFormValues, tag: choice._id })
          console.log('set value', editFormValues.tag);}
        }
      />
      <EditSaveButton type="submit" text="Save changes" id="editBlog" />
    </form>
  ) : (
    <form
      className={styles.form}
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        postBlog();
        setBlogFormValues(initBlogFormValues);
        router.push(`/protected`)
        router.refresh()
      }}
    >
      <div>Add a new blog</div>
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
          {console.log('choice', choice._id);
          console.log('set value', blogFormValues.tag);
            
            setBlogFormValues({ ...blogFormValues, tag: choice._id })}
        }
      />
      <Button type="submit" text="Add blog" id="addblog" />
    </form>
  );
};

export default BlogForm;
