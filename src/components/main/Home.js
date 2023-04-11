import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Products from './Products';
import Header from './Header';
import Banner from './Banner';
import RecentProducts from './RecentProducts';
import { getProducts } from "../utils/Data";
import { setCookie, getCookie } from '../utils/Cookie';
import Loading from "./Loading";
import '../style/Home.css';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [recentProductList, setRecentProductList] = useState([]);

    //상품 클릭 함수
    const handleProductClick = (event, href) => {
        event.preventDefault(); //자동 새로고침을 막음
        setCookie('recentProducts', href);
        const cookieValue = getCookie('recentProducts');
        let cookieValueArray = cookieValue ? cookieValue.split(',') : [];

        //쿠키값이 존재하면
        if (cookieValue) {
            // 최근 본 상품의 수가 5개를 넘어가면
            if (cookieValueArray.length > 5) {
                cookieValueArray = cookieValueArray.slice(cookieValueArray.length - 5);
            }

            const recentProductTemp = cookieValueArray.map((href) => {
                return data.find(item => item.href === href);
            });

            setRecentProductList(recentProductTemp);
        }
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
        }, [recentProductList]);

        if (loading) return <Loading loading={loading} />

        return (
            <>
                <div className="content">
                    <Nav />
                    <div className="box">
                        <Header />
                        <div className='scroll-box'>
                            <Banner />
                            <Products props={data} onClickProduct={handleProductClick} />
                        </div>
                    </div>
                    <RecentProducts props={recentProductList} />
                </div>
            </>
        )
    }

    export default Home;
