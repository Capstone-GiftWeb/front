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
  baseURL: 'http://13.125.82.232:8080',
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await getCookie("accessToken");
    console.log(accessToken);
    config.headers = config.headers || {}; // 초기화
    config.headers["Authorization"] = `Bearer ${accessToken}`
    
    return config;
  }
)

axiosInstance.interceptors.response.use(
  (response) => response, // 응답이 성공적인 경우 그대로 반환
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      console.log("Token expired");

      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        try {
          // 토큰 재발급 요청
          const response = await axios.post('/auth/reissue', {
            refreshToken: refreshToken,
            headers: { Authorization: `Bearer ${refreshToken}` }
          });

          const accessToken = response.data.accessToken;
          setCookie("accessToken", accessToken);
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

          // 원래 요청 재시도
          return axios(originalRequest);
        } catch (error) {
          // 토큰 재발급 요청 실패
          console.log("Token reissue failed");
          // 로그인 페이지로 이동 또는 다른 오류 처리
          window.location.href = '/login';
          return Promise.reject(error);
        }
      } else {
        // 로그인하지 않은 상태 또는 리프레시 토큰이 없는 경우
        console.log("User not logged in or refresh token not found");
        // 로그인 페이지로 이동 또는 다른 오류 처리
        window.location.href = '/login';
        return Promise.reject(error);
      }
    }

    // 다른 오류 처리
    return Promise.reject(error);
  }
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default axiosInstance;