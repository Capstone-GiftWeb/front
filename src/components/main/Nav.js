import React, { useEffect, useState } from 'react';
import '../style/Nav.css'
import { useNavigate } from 'react-router';

const Nav = () => {

    const movePage = useNavigate();
    const goToHome = () => movePage('/Home');
    const goToCategory = () => movePage('/Category');
    const goToFavorite = () => movePage('/Favorite');
    const goToProfile = () => movePage('/Profile');
    const goToStart = () => movePage('/');

    return (
        <>
            <div className='sidebar'>
                <div className='menu'>
                    <i className='fa fa-bars fa-3x' aria-hidden='true'></i>
                    <nav>
                        <p onClick={goToHome}>Main</p>
                        <p onClick={goToCategory}>Category</p>
                        <p onClick={goToFavorite}>Favorite</p>
                        <p onClick={goToProfile}>Profile</p>
                    </nav>
                </div>
                <button onClick={goToStart}>
                    <i className="fa-solid fa-chevron-left fa-1x"></i>
                </button>
            </div>
        </>
    )
}

export default Nav;