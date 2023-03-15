import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../main/Home';
import '../style/Start.css'

const Start = () => {
    const movePage = useNavigate();
    const goToLogin = () => movePage('/Login');
    const goToSignUp = () => movePage('/SignUp');

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem('user_id') === null){
        // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
          console.log('isLogin ?? :: ', isLogin)
        } else {
        // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
        // 로그인 상태 변경
          setIsLogin(true)
          console.log('isLogin ?? :: ', isLogin)
        }
      })

    return (
        <>
        <div>
            {isLogin ? <Home isLogin={isLogin} /> : 
            <section>
                <div className='circle'></div>
                <div className='content'>
                    <div className='text'>
                        <h2>GIFT<br/>GUIDE</h2>
                        <button onClick={goToLogin}>LOG IN</button>
                        <button onClick={goToSignUp}>SIGN UP</button> 
                    </div>
                    <div className='startImg'>
                        <img src="img/mainBuggi.png" alt="start_logo" />
                    </div>
                </div>
            </section>
            }
        </div>
        </>
    )
}

export default Start;