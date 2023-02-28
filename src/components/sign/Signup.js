import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Signup.css'


const Signup = () => {
    const movePage = useNavigate();
    const goToLogin = () => movePage('/Login');

    return (
        <div className='container'>
            <div className='form signup'>
                <h2>Sign Up</h2>
                <div className='inputBox'>
                    <input type="text" required="required"></input>
                    <i class="fa-regular fa-user"></i>
                    <span>username</span>
                </div>
                <div className='inputBox'>
                    <input type="text" required="required"></input>
                    <i class="fa-regular fa-envelope"></i>
                    <span>email address</span>
                </div>
                <div className='inputBox'>
                    <input type="password" required="required"></input>
                    <i class="fa-solid fa-lock"></i>
                    <span>create password</span>
                </div>
                <div className='inputBox'>
                    <input type="password" required="required"></input>
                    <i class="fa-solid fa-lock"></i>
                    <span>confirm password</span>
                </div>
                <div className='inputBox'>
                    <input type="submit" value="Create Account"></input>
                </div>
                <p>Already a member ?ㅤ
                <button onClick={goToLogin}>Log in</button>
                </p>
            </div>
        </div>
    )
}

export default Signup;