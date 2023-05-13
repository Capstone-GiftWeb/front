import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Header from "./Header";
import Products from './Products';
import Loading from './Loading';
import { getFavoriteProducts } from "../utils/Data";
import '../style/Favorite.css'

const Favorite = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const onClickProduct = () => {

    };

    // Data.js의 getFavoriteProducts를 사용하여 데이터를 불러와 useState에 저장
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getFavoriteProducts();
            if (res) { // res가 undefined인 경우에는 setData를 실행하지 않음
                setData(res.gifts);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <Loading loading={loading} />

    return (
        <>
            <div className="content">
                <Nav />
                <div className="favorite-box">
                    <Header/>
                    <div className='scroll-box'>
                        <Products props={data} onClickProduct={onClickProduct}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Favorite;