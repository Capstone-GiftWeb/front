import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/style/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { getCookie, setCookie } from './components/utils/Cookie';
import { Cookies } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));

const axiosInstance = axios.create({
  baseURL: 'https://0621-223-194-159-126.ngrok-free.app',
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await getCookie("accessToken");

    config.headers.common = config.headers.common || {}; // 초기화
    config.headers.common["Authorization"] = `Bearer ${accessToken}`
    
    return config;
  }
)

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      
      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        //config.headers.Authorization = `Bearer ${accessToken}`;
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