import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css'

const Home = () => {
    const movePage = useNavigate();

    const goToLogin = () => movePage('/Login');
    const goToSignUp = () => movePage('/SignUp');

    return (
        <>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToSignUp}>SignUp</button>
        </>
    )
}

export default Home;