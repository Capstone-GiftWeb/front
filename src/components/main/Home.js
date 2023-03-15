import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Products from './Products';
import axios from 'axios';
import Data from './Data';
import Header from './Header';
import '../style/Home.css'

const Home = () => {

    const [productData, setProductData] = useState(Data);

    const onClickFavorite = () => {

    }

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
        <>
            <Nav/>
            <div className='box'>
                <Header/>
                <Products products={productData} onClickFavorite={()=>onClickFavorite}/>
            </div>
        </>
    )
}

export default Home;