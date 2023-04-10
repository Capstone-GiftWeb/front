import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Signup.css'
import axios from 'axios';
import { setCookie, getCookie } from '../utils/Cookie';

const Login = () => {
    const movePage = useNavigate();
    const goToSignUp = () => movePage('/Signup');
    const goToHome = () => movePage('/Home');

    const [inputEmail, setInputEmail] = useState("");
    const [inputPw, setInputPw] = useState("");

    
    const handleInputEmail = (e) => {
      setInputEmail(e.target.value);
    };
  
    const handleInputPw = (e) => {
      setInputPw(e.target.value);
    };

    //const formData=new FormData();
    //formData.append("email",inputEmail);
    //formData.append("password",inputPw);

    const onClickLogin = () => {
        console.log("click login");
        console.log("ID : ", inputEmail);
        console.log("PW : ", inputPw);

        axios({
            method: "POST",
            url: "https://e410-223-194-156-95.jp.ngrok.io/auth/login",
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
            setCookie("access_token", `${accessToken}`); 
            setCookie("refresh_token", `${refreshToken}`);

            console.log("res.data.userId :: ", res.data.userId);
            console.log("res.data.msg :: ", res.data.msg);
            goToHome();
           // return res.data;
          })
          .catch(
            console.log("Fail")
          );
      }
      
    return (
        <div className='container'>
            <div className='form login'>
                <h2>Log In</h2>
                <div className='inputBox'>
                    <input type="email" name="input_email" value={inputEmail} onChange={handleInputEmail} required="required"></input>
                    <i className="fa-regular fa-user"></i>
                    <span>username</span>
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
            
            <a href='/'>return</a>
        </div>
    )
}

export default Login;