import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/style/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from './components/utils/Cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));

//setAuthorizationToken(localStorage.jwtToken);
//axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = getCookie("access_token");
    if (accessToken) {
      // access token이 있으면 request header에 포함시킵니다.
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getCookie('refresh_token');
      if (refreshToken) {
        // refresh token이 있으면 새로운 access token을 발급받습니다.
        return axios.post('http://localhost:3000/refreshToken', {
          refreshToken: refreshToken
        })
        .then(response => {
          const accessToken = response.data.accessToken;
          // 발급받은 access token을 localStorage에 저장합니다.
          localStorage.setItem('accessToken', accessToken);
          // 기존 request의 header에 새로운 access token을 포함시킵니다.
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          // 새로운 access token을 사용하여 기존 request를 다시 보냅니다.
          return axios(originalRequest);
        })
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
