import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Strict mode redeniza 2 vezes o componente

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
