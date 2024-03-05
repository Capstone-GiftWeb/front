import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import CheckBox from '../utils/CheckBox'

import '../style/Signup.css'

const Signup = () => {
  const movePage = useNavigate();
  const goToLogin = () => movePage('/Login');
  const goToHome = () => movePage('/');

  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [confirmPw, setconfirmPw] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputName, setInputName] = useState("");


  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleconfirmPw = (e) => {
    setconfirmPw(e.target.value);
  };

  const handleInputAge = (e) => {
    setInputAge(e.target.value);
  };

  const handleInputGender = (e) => {
    setInputGender(e.target.value);
  };

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const onClickSignup = () => {
    console.log("click login");
    console.log("ID : ", inputEmail);
    console.log("Age : ", inputAge);
    console.log("Gender : ", inputGender);
    console.log("Name : ", inputName);
    console.log("PassWord : ", inputPw);

    if (inputGender === "") {
      return alert("성별을 선택해주세요.");
    }

    if (inputName === "") {
      return alert("이름을 입력해주세요.");
    }

    if (inputEmail === "") {
      return alert("이메일을 입력해주세요.");
    }

    if (inputAge === "") {
      return alert("나이를 입력해주세요.");
    }

    if (inputPw === "") {
      return alert("비밀번호를 입력해주세요.");
    }

        if (inputPw !== confirmPw) {
          return alert('비밀번호 확인이 일치하지 않습니다.');
        }
        
        axios({
            method: "POST",
            url: "http://13.125.82.232:8080/auth/signup",
            headers:{
                "Content-Type":"application/json",
            },
            data : {
              name: inputName,
              email: inputEmail,
              age: inputAge,
              gender: inputGender,
              password: inputPw,
            },
        })
          .then((res) => {
            
            alert("회원가입을 환영합니다 :)");
            goToLogin();
          })
          .catch(
            console.log("Fail")
          );
      }

  return (
    <div className='signup-body'>
      <div className='container'>
        <div className='form'>
          <h2>Sign Up</h2>
          <div className="checkbox-group">
            <p>남성</p>
            <label htmlFor="male">
              <CheckBox
                checked={inputGender === '남자'}
                onChange={handleInputGender}
                value="남자"
                id="male"
              />
            </label>
            
            <p>여성</p>
            <label htmlFor="female">
              <CheckBox
                checked={inputGender === '여자'}
                onChange={handleInputGender}
                value="여자"
                id="female"
              />
            </label>
          </div>
          <div className='inputBox'>
            <input type="text" value={inputName} onChange={handleInputName} required="required"></input>
            <i className="fa-regular fa-user"></i>
            <span>name</span>
          </div>
          <div className='inputBox'>
            <input type="text" value={inputAge} onChange={handleInputAge} required="required"></input>
            <i className="fa-regular fa-user"></i>
            <span>age</span>
          </div>
          <div className='inputBox'>
            <input type="text" value={inputEmail} onChange={handleInputEmail} required="required"></input>
            <i className="fa-regular fa-envelope"></i>
            <span>email</span>
          </div>
          <div className='inputBox'>
            <input type="password" value={inputPw} onChange={handleInputPw} required="required"></input>
            <i className="fa-solid fa-lock"></i>
            <span>create password</span>
          </div>
          <div className='inputBox'>
            <input type="password" value={confirmPw} onChange={handleconfirmPw} required="required"></input>
            <i className="fa-solid fa-lock"></i>
            <span>confirm password</span>
          </div>
          <div className='inputBox'>
            <input type="submit" onClick={onClickSignup} value="Create Account"></input>
          </div>
          <p>Already a member ?
            <button onClick={goToLogin}>Log in</button>
          </p>
        </div>

        <div className='back'>
          <button onClick={goToHome}>
            <i className="fa-solid fa-chevron-left fa-1x"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup;