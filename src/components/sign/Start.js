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
                    <p class="logo">WishyMatch</p>
                </header>

                <section className='wishy'>
                    <div className='wishy-text'>
                        <h5>#Cap StoneAge</h5>
                        <h4>FOR YOU</h4>
                        <h1>WishyMatch</h1>
                        <p>이 웹사이트는 캡-스톤 에이지 팀이 만들었음!</p>
                        <button onClick={goToLogin}>Login</button>
                        <button onClick={goToSignUp} className='signupBtn'>SignUp</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Start;