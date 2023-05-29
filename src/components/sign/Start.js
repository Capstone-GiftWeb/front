import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Start.css'

const Start = () => {
    const movePage = useNavigate();
    const goToLogin = () => movePage('/Login');
    const goToSignUp = () => movePage('/SignUp');

    return (
        <>
            <div className='start'>
                <header>
                    <p className="logo">WishyMatch</p>
                </header>

                <section className='wishy'>
                    <div className='wishy-text'>
                        <h5>#Cap StoneAge</h5>
                        <h4>FOR YOU</h4>
                        <h1>WishyMatch</h1>
                        <p>WishMatch는 사용자의 행동을 분석하여 개인의 선호도를 파악하고, <br/>이를 기반으로 사용자가 원하는 선물을 찾을 수 있게 도와주는 사이트입니다.</p>
                        <button onClick={goToLogin}>Login</button>
                        <button onClick={goToSignUp} className='signupBtn'>SignUp</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Start;