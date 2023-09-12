import React from 'react';
import ReactDOM from 'react-dom/client';
import { Todo } from '@/components/pages';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import('./global.css');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
);
