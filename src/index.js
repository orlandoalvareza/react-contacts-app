import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeContextProvider } from './context/theme-context';
import { MenuContextProvider } from './context/dropdown-menu-context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);