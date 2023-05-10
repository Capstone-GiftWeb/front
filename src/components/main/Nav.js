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
    const [isNavActive, setIsNavActive] = useState("Home");

    return (
        <>
            <div className='sidebar'>
                <div className='menu'>
                    <i className='fa fa-bars fa-3x' aria-hidden='true'></i>
                    <nav>
                        <p className={isNavActive === 'Home' ? "navClick" : ""} onClick={() => {
                            goToHome();
                            setIsNavActive("Home");
                        }}>Main</p>
                        <p className={isNavActive === 'Category' ? "navClick" : ""} onClick={() => {
                            goToCategory()
                            setIsNavActive("Category");
                        }}>Category</p>
                        <p className={isNavActive === 'Favorite' ? "navClick" : ""} onClick={() => {
                            goToFavorite()
                            setIsNavActive("Favorite");
                        }}>Favorite</p>
                        <p className={isNavActive === 'Profile' ? "navClick" : ""} onClick={() => {
                            goToProfile()
                            setIsNavActive("Profile");
                        }}>Profile</p>
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