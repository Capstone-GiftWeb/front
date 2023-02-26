import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Signup.css'

const Signup = () => {
    const movePage = useNavigate();

    const goToHome = () => movePage('/');
    return (
        <>
            <div className='signup'>
                This is a Signup page!
            </div>
            <button onClick={goToHome}>Home</button>
        </>
    )
}

export default Signup;