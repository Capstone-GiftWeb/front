import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/style/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import setAuthorizationToken from './components/utils/setAuthorizationToken';

const root = ReactDOM.createRoot(document.getElementById('root'));

setAuthorizationToken(localStorage.jwtToken);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
