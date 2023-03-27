import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Products from './Products';
import Header from './Header';
import Banner from './Banner';
import '../style/Home.css'

const Home = () => {

    const onClickFavorite = () => {

    }
    
    return (
        <>
            <div className="content">
                <Nav />
                <div className="box">
                    <Header/>
                    <Banner/>
                    <Products onClickFavorite={onClickFavorite}/>
                </div>
            </div>
        </>
    )
}

export default Home;