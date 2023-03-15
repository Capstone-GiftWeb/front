import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Products from './Products';
import axios from 'axios';
import '../style/Home.css'
import { useNavigate, Link } from 'react-router-dom';

const Home = (props) => {

    const isLogin = props.isLogin

    const onLogout = () => {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('user_id')
        // Start로 이동(새로고침)
        document.location.href = '/'
    }

    const movePage = useNavigate();
    const goToHome = () => movePage('/Home');
    const goToCategory = () => movePage('/Category');
    const goToFavorite = () => movePage('/Favorite');
    const goToProfile = () => movePage('/Profile');

    const [data, setData] = useState("");

    const onClick = () => {
        axios({
            method: "GET",
            mode: 'cors',
            url: "https://957a-223-194-157-60.jp.ngrok.io/gifts/all",
            headers:{      
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json;charset=UTF-8",
            },
         })
          .then((response) => {
            setData(response.data);
        });
      };
    
    return (
        <div>
            <div className='menu'>
                <p onClick={goToHome}>Main</p>
                <p onClick={goToCategory}>Category</p>
                <p onClick={goToFavorite}>Favorite</p>
                <p onClick={goToProfile}>Profile</p>
            </div>
            <button onClick={onClick}>불러오기</button>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Home;