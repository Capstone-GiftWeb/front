import React, { useEffect, useState } from 'react';
import '../style/Header.css'
import { getCookie, removeCookie } from '../utils/Cookie';
import axiosInstance from '../..';

const Header = (props) => {

    const isLogin = props.isLogin

    const username = getCookie("name");

    return (
        <header>
            <div className="search-window">
                    <input type="text" id="search" placeholder="검색"/>
                    <span id="search-icon"><i className="fas fa-search" ></i></span>
            </div>
            <div className="header--user">
                <a href='/Profile'>
                    <img src="http://occ-0-3996-1361.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="User" />
                </a>
            </div>
            <div className="header--logout">
                <a href='/Profile' style={{ textDecoration: "none", color: "black"}}>
                    {username}
                </a>
            </div>
        </header>
    );
};

export default Header;