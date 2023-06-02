import React, { useEffect, useState, useRef } from 'react';

import Nav from './Nav';
import Products from './Products';
import Header from './Header';
import Banner from './Banner';
import RecentProducts from './RecentProducts';
import Loading from "./Loading";

import { getCategoryProducts, getFavoriteProducts, getProducts } from "../utils/Data";
import { setRecentHistory, filterDataByList, deleteRecentHistory, setClickProduct, setClickFavorite } from '../utils/ClickUtils'

import '../style/Home.css';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [dummyData, setDummyData] = useState([]);
    const [favoriteData, setFavoriteData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const setScrollRef = useRef(0)

    const onClickProduct = (href) => {
        setRecentHistory(href); // 로컬 스토리지에 저장

        const filtered = filterDataByList(dummyData); // 리스트로 데이터 필터링
        setFilteredData(filtered); // 필터링된 데이터 설정

        setClickProduct(href); // 클릭한 값을 서버로 전송 > 리다이렉트!
    }

    const onDeleteRecentProduct = (href) => {
        deleteRecentHistory(href);

        const filtered = filterDataByList(dummyData); // 리스트로 데이터 필터링
        setFilteredData(filtered); // 필터링된 데이터 설정
    }

    const onClickFavorite = async (product) => {
        const list = await setClickFavorite(product);
        setFavoriteData(list);
    }

    const onScrollToTop = () => {
        if (setScrollRef.current) {
            setScrollRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // Data.js의 getCategoryProducts를 사용하여 데이터를 불러와 useState에 저장
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // const res = await getCategoryProducts();
            // if (res) {
            //     setData(res);
            // }

            const dummyRes = await getProducts();
            if (dummyRes) {
                setDummyData(dummyRes.gifts);
            }

            const FavoriteRes = await getFavoriteProducts();
            if (FavoriteRes) { setFavoriteData(FavoriteRes); }

            setLoading(false);
        };
        fetchData();
    }, []);

    // 최근 본 상품 목록을 useState에 집어넣어서 랜더링
    useEffect(() => {
        if (dummyData.length > 0) {
            const filtered = filterDataByList(dummyData);
            setFilteredData(filtered);
        }
    }, [dummyData])

    if (loading) return <Loading loading={loading} />

    return (
        <>
            <div className='home-body'>
                <div className="content">
                    <Nav />
                    <div className="home-box">
                        <Header />
                        <div className='horizontal-box'>
                            <div className='scroll-box' ref={setScrollRef}>
                                <Banner />
                                {/* <div className='rank-products'>
                                    <p className='title'>Recommend</p>
                                    <Products props={data} onClickProduct={onClickProduct} onClickFavorite={onClickFavorite} itemSize={8} favoriteList={favoriteData} />
                                </div> */}
                                <div className='rank-products'>
                                    <p className='title'>Recommend</p>
                                    <Products props={dummyData} onClickProduct={onClickProduct} onClickFavorite={onClickFavorite} itemSize={8} favoriteList={favoriteData} />
                                </div>
                            </div>
                            <div className='nonScroll-box'>
                                <RecentProducts props={filteredData} onDeleteRecentProduct={onDeleteRecentProduct} favoriteList={favoriteData} />
                                <img src='img/upward.png' onClick={onScrollToTop} alt="topBtn" id='topBtn' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
