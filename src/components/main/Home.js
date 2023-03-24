import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Products from './Products';
import axios from 'axios';
import Data from './Data';
import Header from './Header';
import Banner from './Banner';
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
            <div className="content">
                <Nav />
                <div className="box">
                    <Header/>
                    <Banner/>
                    <Products products={productData} onClickFavorite={()=>onClickFavorite}/>
                </div>
            </div>
        </>
    )
}

export default Home;