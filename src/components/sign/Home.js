import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css'

const Home = () => {
    const movePage = useNavigate();

    const goToLogin = () => movePage('/Login');
    const goToSignUp = () => movePage('/SignUp');

    return (
        <>
        <section>
            <div className='circle'></div>
            <div className='content'>
                <div className='text'>
                    <h2>GIFT<br/>GUIDE</h2>
                    <button onClick={goToLogin} onMouseOver>LOG IN</button>
                    <button onClick={goToSignUp}>SIGN UP</button> 
                </div>
                <div className='startImg'>
                    <img src="img/mainNavIcon.png" alt="start_logo" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;