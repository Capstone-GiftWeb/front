import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Signup.css'
import axios from 'axios';
import { setCookie, getCookie } from '../utils/Cookie';
import axiosInstance from '../..';

const Login = () => {
    const movePage = useNavigate();
    const goToSignUp = () => movePage('/Signup');
    const goToHome = () => movePage('/Home');
    const goToStart = () => movePage('/');

    const [inputEmail, setInputEmail] = useState("");
    const [inputPw, setInputPw] = useState("");

    
    const handleInputEmail = (e) => {
      setInputEmail(e.target.value);
    };
  
    const handleInputPw = (e) => {
      setInputPw(e.target.value);
    };

    const onClickLogin = () => {
        console.log("click login");
        console.log("ID : ", inputEmail);
        console.log("PW : ", inputPw);

        if (inputEmail === "") {
          return alert("이메일을 입력해주세요.");
        }
        
        if (inputPw === "") {
          return alert("비밀번호를 입력해주세요.");
        }

        axiosInstance({
            method: "POST",
            url: "/auth/login",
            headers:{
                "Content-Type":"application/json",
            },
            data : {
              email: inputEmail,
              password: inputPw,
            },
        })
          .then((res) => {

            console.log(res);
            const accessToken = res.data['accessToken'];
            const refreshToken = res.data['refreshToken'];
            
            setCookie("accessToken", `${accessToken}`); 
            setCookie("refreshToken", `${refreshToken}`);

            alert("로그인 성공");
            goToHome();
           return res.data;
          })
          .catch((e)=>{

            alert("로그인 오류");
            console.log(e);
            console.log("Fail");
          });
      }
      
    return (
        <div className='container'>
            <div className='form login'>
                <h2>Log In</h2>
                <div className='inputBox'>
                    <input type="email" name="input_email" value={inputEmail} onChange={handleInputEmail} required="required"></input>
                    <i className="fa-regular fa-user"></i>
                    <span>email</span>
                </div>
                <div className='inputBox'>
                    <input type="password" name="input_pw" value={inputPw} onChange={handleInputPw} required="required"></input>
                    <i className="fa-solid fa-lock"></i>
                    <span>password</span>
                </div>
                <div className='inputBox'>
                    <input type="submit" onClick={onClickLogin} value="LOGIN"></input>
                </div>
                <p>Not Registered ?
                  <button onClick={goToSignUp}>Create an account</button>
                </p>
            </div>
            
            <div className='back'>
            <button onClick={goToStart}>
                    <i className="fa-solid fa-chevron-left fa-1x"></i>
            </button>
            </div>
        </div>
    )
}

export default Login;