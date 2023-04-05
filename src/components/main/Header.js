import React, { useEffect, useState } from 'react';
import '../style/Header.css'

const Header = (props) => {

    const isLogin = props.isLogin

    const onLogout = () => {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        //sessionStorage.removeItem('user_id')
    }


    return (
        <header>
            <div className="header--logo">
                <a href="/Home" style={{ textDecoration: "none", color: "black"}}>
                    {/* <img src="img/pageIcon.jpg" alt="home_logo" /> */}
                </a>
                <a href="/Home" style={{ textDecoration: "none", color: "black"}}>
                    상상부기
                </a>
            </div>
            <div className="header--user">
                <a href='/Profile'>
                    <img src="http://occ-0-3996-1361.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="User" />
                </a>
            </div>
            <div className="header--logout">
                <a href='/' style={{ textDecoration: "none", color: "black"}} onClick={onLogout}>
                    Logout
                </a>
            </div>
        </header>
    );
};

export default Header;