import React, { useEffect, useState } from 'react';
import axiosInstance from '../..';
import { setClickSearchInput } from '../utils/ClickUtils'

import '../style/Header.css'

const Header = ({ query }) => {
    const [inputValue, setInputValue] = useState(query || '');
    const [username, setUsername] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [autoValue, setAutoValue] = useState([]);

    useEffect(() => {
        // 로그인된 사용자 정보를 가져오는 함수
        const fetchUserInfo = async () => {
            try {
                // 서버에서 회원 정보 가져오기
                const response = await axiosInstance.get('/member/me');

                // 가져온 회원 정보를 상태에 설정
                setUsername(response.data.name);
            } catch (error) {
                // 오류 처리
                console.error(error);
            }
        };
        fetchUserInfo();
    }, []);

    // 검색 input이 달라질 때마다 서버로 전송해서 자동완성 리스트를 받아오기
    useEffect(() => {
        const list = setClickSearchInput(inputValue);
        setAutoValue(list);
    }, [inputValue]);

    const toggleAutoValue = () => {
        setIsSearch(!isSearch);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);

        if (inputValue !== "")
            toggleAutoValue();
    };

    return (
        <header className='header-body'>
            <div className="search-window">
                <form action="/search" method="GET">
                    <input type="text" id="searchInput" className={isSearch ? "inputShow" : "inputHide"} name='query' placeholder="검색" value={inputValue}
                        onChange={handleInputChange} />
                    <button type="submit" id="searchBtn" className={isSearch ? "searchBtnShow" : "searchBtnHide"}><i className="fas fa-search" /></button>
                </form>
                <div className={isSearch ? "search-auto-show" : "search-auto-hide"}>
                    {autoValue.map((word) => {
                        return (
                            <p>{word}</p>
                        )
                    })}
                </div>
            </div>
            <div className="header--user">
                <a href='Profile' className='name' style={{ textDecoration: "none", color: "black" }}>
                    {username}
                </a>
                <a href='/Profile'>
                    <img src="img/circleprofile.png" alt="User" />
                </a>
            </div>
        </header>
    );
};

export default Header;