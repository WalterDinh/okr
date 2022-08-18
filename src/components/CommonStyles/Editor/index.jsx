import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = (props) => {
  const { editorRef } = props;

  return (
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          menubar: false,
          width: '100%',
          height: 200,
          resize: false,
          plugins: [
            'a11ychecker',
            'advcode',
            'advlist',
            'anchor',
            'autolink',
            'fullscreen',
            'help',
            'image',
            'editimage',
            'tinydrive',
            'lists',
            'link',
            'media',
            'powerpaste',
            'preview',
            'searchreplace',
            'table',
            'tinymcespellchecker',
            'visualblocks',
            'wordcount',
          ],
          toolbar:
            'insertfile a11ycheck undo redo | bold italic underline | forecolor backcolor | template codesample | alignleft aligncenter alignright alignjustify | link image',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </div>
  );
};

export default TextEditor;
