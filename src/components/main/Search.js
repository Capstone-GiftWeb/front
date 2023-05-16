import React, { useEffect, useState, useRef } from 'react';

import Nav from './Nav';
import Products from './Products';
import Header from './Header';
import Loading from "./Loading";
import axiosInstance from '../..';

import { getSearchProducts } from "../utils/Data";
import { setRecentHistory } from '../utils/ClickUtils'

import '../style/Search.css';

const Search = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const onClickProduct = (href) => {
        setRecentHistory(href); // 로컬 스토리지에 저장
    }

    // Data.js의 getProducts를 사용하여 데이터를 불러와 useState에 저장
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getSearchProducts();
            if (res) { // res가 undefined인 경우에는 setData를 실행하지 않음
                setData(res.gifts);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <Loading loading={loading} />

    return (
        <div className='search-body'>
            <div className="content">
                <Nav />
                <div className="search-box">
                    <Header />
                    <div className='scroll-box'>
                        <div className='search-products'>
                            <Products props={data} onClickProduct={onClickProduct} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;