import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/style/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { getCookie, setCookie } from './components/utils/Cookie';
import { Cookies } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));

//axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: 'https://2748-223-194-159-126.ngrok-free.app',
  headers: { "Content-type": "application/json" },
  withCredentials: true,
  //true 설정 해줘야 refershToken cookie를 주고받을수있음.
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      
      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        return axios.post('/auth/reissue', {
          refreshToken: refreshToken
        })
        .then(response => {
          const accessToken = response.data['accessToken'];
          setCookie("accessToken", `${accessToken}`); 
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return axios(originalRequest);
        })
        .catch(error => {
          window.location.href('/login');
          return Promise.reject(error);
        });
      }
    }
    return Promise.reject(error);
  }
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default axiosInstance;