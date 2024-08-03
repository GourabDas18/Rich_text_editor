import { useRef, useState } from 'react';
import BundledEditor from './BundledEditor'
import './App.css';

export default function App() {
  const editorRef = useRef(null);
  const [textValue,setTextValue]=useState("");
  const log = () => {
    if (editorRef.current) {
      setTextValue(editorRef.current.getContent())
    }
  };
  return (
    <div>
          <h1>React Rich Text Editor</h1>
          <div className='editordiv'>
      <BundledEditor
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue='<p>This is my first writing.</p>'
        init={{
          height: 0.5*window.innerHeight,
          width: 0.75*window.innerWidth,
          menubar: false,
          plugins: [
            'advlist', 'anchor', 'autolink', 'link', 'lists',
            'searchreplace', 'table', 'wordcount', 'code' , 'directionality', 'media' , 'preview', 'image' , 'emoticons'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic underline forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'code directionality media table preview image emoticons',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

        }}

        onChange={()=>{log}}
      />
      <button onClick={log}>Get HTML</button>
      <textarea value={textValue}></textarea>
    </div>
    
    </div>

  );
}
