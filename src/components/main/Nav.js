import React, { useEffect, useState } from 'react';
import '../style/Menu.css'
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';
import Header from './Header';

const Nav = () => {

    const movePage = useNavigate();
    const goToHome = () => movePage('/Home');
    const goToCategory = () => movePage('/Category');
    const goToFavorite = () => movePage('/Favorite');
    const goToProfile = () => movePage('/Profile');


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
            </div>
        </>
    )
}

export default Nav;