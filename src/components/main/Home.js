import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Products from './Products';
import Header from './Header';
import Banner from './Banner';
import RecentProducts from './RecentProducts';
import { getProducts } from "../utils/Data";
import { getCookie, setCookie } from '../utils/Cookie';
import Loading from "./Loading";
import '../style/Home.css';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [clickedItem, setClickedItem] = useState("");
    const [clickedProductList, setClickedProductList] = useState([]);
    const [cookieList, setCookieList] = useState(getCookie('recentProducts'));
    const [recentProductList, setRecentProductList] = useState([]);

    const onClickProduct = (href) => {
        setClickedItem(href);
        setClickedProductList(prevData => [href, ...prevData]);
        setClickedProductList([...new Set(clickedProductList)]);

        if (clickedProductList.length > 5) {
            setClickedProductList(clickedProductList.slice(0, 5));
        }
        setCookie('recentProducts', JSON.stringify(clickedProductList));
        setCookieList(getCookie('recentProducts'));
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
        const products = data.filter(item => cookieList.includes(item.href));
        setRecentProductList(products);
    }, [data, cookieList])

    if (loading) return <Loading loading={loading} />

    return (
        <>
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
                <RecentProducts props={recentProductList}/>
            </div>
        </>
    )
}

export default Home;
