import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Signup.css'

const Login = () => {
    const movePage = useNavigate();
    const goToSignUp = () => movePage('/Signup');

    return (
        <div className='container'>
            <div className='form login'>
                <h2>Log In</h2>
                <div className='inputBox'>
                    <input type="text" required="required"></input>
                    <i class="fa-regular fa-user"></i>
                    <span>username</span>
                </div>
                <div className='inputBox'>
                    <input type="password" required="required"></input>
                    <i class="fa-solid fa-lock"></i>
                    <span>password</span>
                </div>
                <div className='inputBox'>
                    <input type="submit" value="LOGIN"></input>
                </div>
                <p>Not Registered ?ㅤ
                <button onClick={goToSignUp}>Create an account</button>
                </p>
            </div>
        </div>
    )
}

export default Login;