import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Signup.css'
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';


const Signup = () => {
    const movePage = useNavigate();
    const goToLogin = () => movePage('/Login');

    const [inputEmail, setInputEmail] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [inputGender, setInputGender] = useState("");
    const [inputName, setInputName] = useState("");

    
    const handleInputEmail = (e) => {
      setInputEmail(e.target.value);
    };
  
    const handleInputPw = (e) => {
      setInputPw(e.target.value);
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

    const formData=new FormData();
    formData.append("name",inputName);
    formData.append("email",inputEmail);
    formData.append("age", inputAge);
    formData.append("gender", inputGender);

    const onClickSignup = () => {
        console.log("click login");
        console.log("ID : ", inputEmail);
        console.log("Age : ", inputAge);
        console.log("Gender : ", inputGender);
        console.log("Name : ", inputName);
        
        axios({
            method: "POST",
            url: "https://957a-223-194-157-60.jp.ngrok.io/members/new",
            headers:{
                "Content-Type":"muttipart/form-data",
            },
            data : formData,
        })
          .then((res) => {
            console.log("res.data.userId :: ", res.data.userId);
            console.log("res.data.msg :: ", res.data.msg);
            if (res.data.email === undefined) {
              // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
              alert("입력하신 id 가 일치하지 않습니다.");
            } else if (res.data.email === null) {
              // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
              alert("입력하신 비밀번호 가 일치하지 않습니다.");
            } else if (res.data.email === inputEmail) {
              // id, pw 모두 일치 userId = userId1, msg = undefined
              sessionStorage.setItem("email", inputEmail); // sessionStorage에 id를 user_id라는 key 값으로 저장
              sessionStorage.setItem("name", inputName); // sessionStorage에 id를 user_id라는 key 값으로 저장
            }
            // 작업 완료 되면 로그인 페이지 이동
            goToLogin();
          })
          .catch(
            console.log("Fail")
          );
      }

    return (
        <div className='container'>
            <div className='form signup'>
                <h2>Sign Up</h2>
                <p>
                    <label htmlFor="gender">남성</label>
                    <input id="gender" name='gender' type="radio"  value="남자" onChange={handleInputGender} ></input>

                    <label htmlFor="gender">여성</label>
                    <input id="gender" name='gender' type="radio" value="여자" onChange={handleInputGender} ></input>
                </p>    
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
                    <i class="fa-regular fa-envelope"></i>
                    <span>email</span>
                </div>
                <div className='inputBox'>
                    <input type="password" value={inputPw} onChange={handleInputPw} required="required"></input>
                    <i className="fa-solid fa-lock"></i>
                    <span>create password</span>
                </div>
                {/* <div className='inputBox'>
                    <input type="password" required="required"></input>
                    <i class="fa-solid fa-lock"></i>
                    <span>confirm password</span>
                </div> */}
                <div className='inputBox'>
                    <input type="submit" onClick={onClickSignup} value="Create Account"></input>
                </div>
                <p>Already a member ?
                  <button onClick={goToLogin}>Log in</button>
                </p>
            </div>
        </div>
    )
}

export default Signup;