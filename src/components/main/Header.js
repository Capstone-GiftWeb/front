import React, { useEffect, useState } from 'react';
import axiosInstance from '../..';
import { getCookie } from '../utils/Cookie';

import '../style/Header.css'

const Header = ({ query }) => {
    const [inputValue, setInputValue] = useState(query || '');
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        // 로그인된 사용자 정보를 가져오는 함수
        const fetchUserInfo = async () => {
          try {
            // 서버에서 회원 정보 가져오기
            const response = await axiosInstance.get('/member/me');
    
            // 가져온 회원 정보를 상태에 설정
            setUsername(response.data.username);
          } catch (error) {
            // 오류 처리
            console.error(error);
          }
        };
    
        fetchUserInfo();
      }, []);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <header className='header-body'>
            <div className="search-window">
                <form action="/search" method="GET">
                    <input type="text" id="searchInput" name='query' placeholder="검색" value={inputValue}
                        onChange={handleInputChange} />
                    <button type="submit" id="searchBtn"><i className="fas fa-search" /></button>
                </form>
            </div>
            <div className="header--user">
                <a href='Profile' className='name' style={{ textDecoration: "none", color: "black" }}>
                    {username} yunjeong
                </a>
                <a href='/Profile'>
                    <img src="img/circleprofile.png" alt="User" />
                </a>
            </div>
        </header>
    );
};

export default Header;