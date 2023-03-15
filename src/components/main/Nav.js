import React, { useEffect, useState } from 'react';
import '../style/Menu.css'
import { useNavigate } from 'react-router';

const Nav = (props) => {

    const movePage = useNavigate();
    const goToHome = () => movePage('/Home');
    const goToCategory = () => movePage('/Category');
    const goToFavorite = () => movePage('/Favorite');
    const goToProfile = () => movePage('/Profile');

    //const isLogin = props.isLogin

    const onLogout = () => {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('user_id')
        // Start로 이동(새로고침)
        document.location.href = '/'
    }

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
                <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
                <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                <li class="nav-item"><a class="nav-link" href="#interests">Interests</a></li>
                <li class="nav-item"><a class="nav-link" href="#awards">Awards</a></li>
            </ul>
        </nav>
       <div>
            <nav>
                <p onClick={goToHome}>Main</p>
                <p onClick={goToCategory}>Category</p>
                <p onClick={goToFavorite}>Favorite</p>
                <p onClick={goToProfile}>Profile</p>
            </nav>
            <button onClick={onLogout}>Logout</button>
        </div>
        </>
    )
}

export default Nav;