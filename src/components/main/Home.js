import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Products from './Products';
import Data from './Data';
//import '../style/Home.css'

const Home = () => {
    const [productData, setProductData] = useState(Data);

    const onClickFavorite = () => {

    }
    
    return (
        <>
            <Nav/>
            <Products products={productData} onClickFavorite={()=>onClickFavorite}/>
        </>
    )
}

export default Home;