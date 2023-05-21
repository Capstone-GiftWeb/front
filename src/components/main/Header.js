import React, { useEffect, useState } from 'react';

import { getCookie } from '../utils/Cookie';

import '../style/Header.css'

const Header = () => {
    const username = getCookie("name");

    return (
        <header className='header-body'>
            <div className="search-window">
                <form action="/search" method="GET">
                    <input type="text" id="searchInput" name='query' placeholder="검색" />
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