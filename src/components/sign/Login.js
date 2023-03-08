import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Signup.css'
import axios from 'axios';

const Login = () => {
    const movePage = useNavigate();
    const goToSignUp = () => movePage('/Signup');

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    
      const handleInputId = (e) => {
      setInputId(e.target.value);
    };
  
    const handleInputPw = (e) => {
      setInputPw(e.target.value);
    };

    const data = {
      email: inputId,
      password: inputPw,
      rememberId: true};

    const onClickLogin = () => {
        console.log("click login");
        console.log("ID : ", inputId);
        console.log("PW : ", inputPw)

        axios.post("http://192.168.1.185:80/members/login", { data
          },{ValidityState:false})
        .then(() => {
            console.log("hi");
        })
          .catch(()=>{
            console.log("bad");
          });
      }

    return (
        <div className='container'>
            <div className='form login'>
                <h2>Log In</h2>
                <div className='inputBox'>
                    <input type="text" name="input_id" value={inputId} onChange={handleInputId} required="required"></input>
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
        </div>
    )
}

export default Login;