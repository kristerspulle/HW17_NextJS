'use client';

import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './TextEditor.module.css'

const TextEditor = ({onEditorStateChange}: {onEditorStateChange: (e: EditorState) => void}): JSX.Element => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

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
    />
  );
};

export default TextEditor;
