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
  baseURL: 'https://638b-223-194-155-186.ngrok-free.app',
  withCredentials: true,
  //true 설정 해줘야 refershToken cookie를 주고받을수있음.
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = getCookie("accessToken");
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
    //요청에 대한 응답 상태 코드가 401(Unauthorized)이고, 해당 요청이 아직 재시도되지 않은 경우
    //access 만료시
    if (error.response.status === 401 && !originalRequest._retry) {
      //새로운 Access Token을 가져온 후에 요청을 다시 보낼 때 무한 루프에 빠지지 않도록 하기 위한 것
      originalRequest._retry = true;
      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        // refresh token이 있으면 새로운 access token을 발급받습니다.
        return axios.post('/auth/reissue', {
          refresh_Token: refreshToken
        })
        .then(response => {
          // 발급받은 access token을 Cookie에 저장합니다.
          const accessToken = response.data['accessToken'];
          setCookie("accessToken", `${accessToken}`); 
          
          // 기존 request의 header에 새로운 access token을 포함시킵니다.
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          // 새로운 access token을 사용하여 기존 request를 다시 보냅니다.
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