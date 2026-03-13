import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Polyfill for global
if (typeof (window as any).global === 'undefined') {
  (window as any).global = window;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <react.strictmode>
    <app/>
  </React.StrictMode>
);