import React, { useEffect, useState } from 'react';
import '../style/Header.css'
import { getCookie, removeCookie } from '../utils/Cookie';
import axiosInstance from '../..';

const Header = (props) => {

    const isLogin = props.isLogin

    const username = getCookie("name");

    return (
        <header className='header-body'>
            <div className="search-window">
                    <input type="text" id="search" placeholder="검색"/>
                    <span id="search-icon"><i className="fas fa-search" ></i></span>
            </div>
            <div className="header--user">
                <a href='Profile' className='name' style={{ textDecoration: "none", color: "black"}}>
                    jihyun{username}
                </a>
                <a href='/Profile'>
                    <img src="img/circleprofile.png" alt="User" />
                </a>
            </div>
        </header>
    );
};

export default Header;