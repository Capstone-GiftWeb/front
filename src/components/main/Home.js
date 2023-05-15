import React, { useEffect, useState } from 'react';

import Nav from './Nav';
import Products from './Products';
import Header from './Header';
import Banner from './Banner';
import RecentProducts from './RecentProducts';
import Loading from "./Loading";

import { getProducts } from "../utils/Data";
import { setRecentHistory, filterDataByCookie } from '../utils/ClickUtils'

import '../style/Home.css';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const onClickProduct = (href) => {
        setRecentHistory(href); // 로컬 스토리지에 저장

        const filtered = filterDataByCookie(data); // 리스트로 데이터 필터링
        setFilteredData(filtered); // 필터링된 데이터 설정
    }

    // Data.js의 getProducts를 사용하여 데이터를 불러와 useState에 저장
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getProducts();
            if (res) { // res가 undefined인 경우에는 setData를 실행하지 않음
                setData(res.gifts);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const filtered = filterDataByCookie(data);
            setFilteredData(filtered);
        }
    }, [data])

    if (loading) return <Loading loading={loading} />

    return (
        <>
            <div className='home-body'>
                <div className="content">
                    <Nav />
                    <div className="home-box">
                        <Header />
                        <div className='scroll-box'>
                            <Banner />
                            <div className='top-rank-products'>
                                <Products props={data} onClickProduct={onClickProduct} />
                            </div>
                        </div>
                    </div>
                    <RecentProducts props={filteredData} />
                </div>
            </div>
        </>
    )
}

export default Home;
