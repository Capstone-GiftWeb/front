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

    const formData=new FormData();
    formData.append("email",inputId);
    formData.append("password",inputPw);

    const onClickLogin = () => {
        console.log("click login");
        console.log("ID : ", inputId);
        console.log("PW : ", inputPw);
        axios({
            method: "POST",
            url: "https://2180-211-217-232-194.jp.ngrok.io/members/login",
            headers:{
                "Content-Type":"muttipart/form-data",
            },
            data : formData,
        })
        //   .then((res) => {
        //     console.log(res);
        //     console.log("res.data.userId :: ", res.data.userId);
        //     console.log("res.data.msg :: ", res.data.msg);
        //     if (res.data.email === undefined) {
        //       // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
        //       console.log("======================", res.data.msg);
        //       alert("입력하신 id 가 일치하지 않습니다.");
        //     } else if (res.data.email === null) {
        //       // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
        //       console.log(
        //         "======================",
        //         "입력하신 비밀번호 가 일치하지 않습니다."
        //       );
        //       alert("입력하신 비밀번호 가 일치하지 않습니다.");
        //     } else if (res.data.email === inputId) {
        //       // id, pw 모두 일치 userId = userId1, msg = undefined
        //       console.log("======================", "로그인 성공");
        //       sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
        //       sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
        //     }
        //     // 작업 완료 되면 페이지 이동(새로고침)
        //     document.location.href = "/";
        //   })
        .then((res) => {
            console.log("hi");
        })
          .catch(
            console.log()
          );
      }

    // const onClickLogin = () => {
            
	// /* 객체 생성 후 전송 */
    //     const userData = {
    //         email: inputId,
    //         password: inputPw,
    //         rememberId: true
    //     };


    //     API.post('https://2180-211-217-232-194.jp.ngrok.io/members/login', userData)
    //         .then((response) => {
    //             console.log("hi");
    //         })
    //         .catch((error) => console.log(error.response));
    // };

    return (
        <div className='container'>
            <div className='form login'>
                <h2>Log In</h2>
                <div className='inputBox'>
                    <input type="email" name="input_id" value={inputId} onChange={handleInputId} required="required"></input>
                    <i class="fa-regular fa-user"></i>
                    <span>username</span>
                </div>
                <div className='inputBox'>
                    <input type="password" name="input_pw" value={inputPw} onChange={handleInputPw} required="required"></input>
                    <i class="fa-solid fa-lock"></i>
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