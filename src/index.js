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

axios.interceptors.response.use(
  (response) => {return response},
  async (error) => {

    const originalRequest = config;

    const {
      config,
      response: {status},
    } = error;

    if (status === 401 && originalRequest._retry) {
      console.log("token expired");

      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        return axios.post('/auth/reissue', {
          refreshToken: refreshToken,
          headers: { authorization: `Bearer ${refreshToken}` }
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