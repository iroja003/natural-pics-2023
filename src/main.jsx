import React from 'react';
import ReactDOM from 'react-dom/client';
//
import './bootstrap.min.css';
//
import { BrowserRouter } from 'react-router-dom';
//
import App from './App';
import './index.css';
//
import { FavoritoProvider } from './Contexto/FavoritoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritoProvider>
        <App />
      </FavoritoProvider>
    </BrowserRouter>
    </React.StrictMode>,
)
