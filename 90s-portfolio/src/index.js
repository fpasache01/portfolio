import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // We'll create this for global styles
import App from './App';
import './i18n'; // Import i18n configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);