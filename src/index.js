import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi! How are you?', like: 14 },
  { id: 2, message: 'It\'s my first post', like: 23 }
]

let dialogs = [
  { id: 1, name: 'Maria' },
  { id: 2, name: 'Kesha' },
  { id: 3, name: 'Jeka' }
]

let messages = [
  { id: 1, message: 'Hi! All good?' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'What are you doing?' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
