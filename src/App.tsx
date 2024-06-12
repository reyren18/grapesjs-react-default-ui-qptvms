import * as React from 'react';
import GjsEditor from '@grapesjs/react';
import './style.css';
import type { Editor } from 'grapesjs';

export default function App() {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor });
  };

  return (
    <GjsEditor
      grapesjs="https://unpkg.com/grapesjs"
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: false,
      }}
      plugins={[
        {
          id: 'gjs-blocks-basic',
          src: 'https://unpkg.com/grapesjs-blocks-basic',
        },
      ]}
      onEditor={onEditor}
    />
  );
}
