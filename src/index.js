import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthContextProvider } from './context/auth-context';
import { ThemeContextProvider } from './context/theme-context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);