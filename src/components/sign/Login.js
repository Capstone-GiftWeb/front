import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'

const Login = () => {
    const movePage = useNavigate();

    const goToHome = () => movePage('/');
    return (
        <>
            <div className='login'>
                This is a Login page!
            </div>
            <button onClick={goToHome}>Home</button>
        </>
    )
}

export default Login;