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
                    <a href="#" class="logo">WishyMatch</a>
                </header>

                <section className='wishy'>
                    <div className='wishy-text'>
                        <h5>#2 Trending</h5>
                        <h4>Lead Supercell</h4>
                        <h1>WishyMatch</h1>
                        <p>이 웹사이트는 캡-스톤 에이지 팀이 만들었음!</p>
                        <p onClick={goToLogin}>Login</p>
                        <p onClick={goToSignUp} className='ctaa'>SignUp</p> />
                    </div>

                    <div className='wishy-image'>
                        <img src="img/mainBuggi.png" alt='부기'/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Start;