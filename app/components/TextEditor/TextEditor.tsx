'use client';

import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, EditorState, convertFromHTML } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './TextEditor.module.css'

const TextEditor = ({onEditorStateChange, initialContent}: {onEditorStateChange: (e: EditorState) => void, initialContent?: string}): JSX.Element => {
  const [editorState, setEditorState] = useState(() => {
    if (initialContent) {
      const { contentBlocks } = convertFromHTML(initialContent)
      const contentState = ContentState.createFromBlockArray(contentBlocks)
      return EditorState.createWithContent(contentState);
    } else {
      return EditorState.createEmpty();
    }
  });

  const editorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    onEditorStateChange(newEditorState);
  };

  return (
    <Editor
      toolbarOnFocus
      wrapperClassName={styles.wrapper}
      editorClassName={styles.editor}
      toolbarClassName={styles.toolbar}
      editorState={editorState}
      onEditorStateChange={editorStateChange}
      toolbar={{options: ['inline', 'list', 'textAlign', 'history']}}
    />
  );
};

export default TextEditor;
