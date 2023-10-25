import React from 'react';
import ReactDOM from 'react-dom/client';

import { LoginContextProvider } from './context/login-context';
import { ThemeContextProvider } from './context/theme-context';
import { MenuContextProvider } from './context/dropdown-menu-context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <ThemeContextProvider>
        <MenuContextProvider>
          <App />
        </MenuContextProvider>
      </ThemeContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);