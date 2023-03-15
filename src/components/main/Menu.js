import React, { useEffect, useState } from 'react';
import '../style/Menu.css'
import { useNavigate } from 'react-router';

const Menu = (props) => {

    const movePage = useNavigate();
    const goToHome = () => movePage('/Home');
    const goToCategory = () => movePage('/Category');
    const goToFavorite = () => movePage('/Favorite');
    const goToProfile = () => movePage('/Profile');

    const isLogin = props.isLogin

    const onLogout = () => {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('user_id')
        // Start로 이동(새로고침)
        document.location.href = '/'
    }

    return (
       <div>
            <div className='menu'>
                <p onClick={goToHome}>Main</p>
                <p onClick={goToCategory}>Category</p>
                <p onClick={goToFavorite}>Favorite</p>
                <p onClick={goToProfile}>Profile</p>
            </div>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Menu;