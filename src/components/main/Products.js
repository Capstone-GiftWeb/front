import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import axios from 'axios';
//import '../style/lobby.css'

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    let url = "https://localhost:8080/gifts/all";

    useEffect(() => {
        
    },[]);

    if(loading) return <Loading loading={loading}/>

    return (
        <>
            this is a main page!
        </>
    )
}

export default Products;