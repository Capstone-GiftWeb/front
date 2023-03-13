import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Products from './Products';
import axios from 'axios';
import '../style/Home.css'
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {

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
                <h1 onClick={goToHome}>Main</h1>
                <h1 onClick={goToCategory}>Category</h1>
                <h1 onClick={goToFavorite}>Favorite</h1>
                <h1 onClick={goToProfile}>Profile</h1>
            </div>
            {/* <button onClick={onClick}>불러오기</button> */}
        </div>
    )
}

export default Home;