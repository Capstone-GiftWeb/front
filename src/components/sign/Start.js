import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../main/Home';
import '../style/Start.css'

const Start = () => {
    const movePage = useNavigate();
    const goToLogin = () => movePage('/Login');
    const goToSignUp = () => movePage('/SignUp');
    const goToHome = () => movePage('/Home');

    return (
        <>
        <div>
            <section className='col-md-4'>
                <div className='circle'></div>
                <div className='content'>
                    <div className='text'>
                        <h2>GIFT<br/>GUIDE</h2>
                        <button onClick={goToLogin}>Log In</button>
                        <button onClick={goToSignUp}>Sign Up</button> 
                    </div>
                    <div className='startImg'>
                        <img src="img/mainBuggi.png" alt="start_logo" />
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Start;