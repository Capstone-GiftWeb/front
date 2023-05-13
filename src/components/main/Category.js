import React, { useEffect, useState, useRef } from 'react';
import Nav from './Nav';
import Header from './Header';
import Products from './Products';
import { getCategoryProducts } from "../utils/Data";
import { getCookie, setCookie } from '../utils/Cookie';
import Loading from "./Loading";
import CategoryMenu from './CategoryMenu';
import RecentProducts from './RecentProducts';
import '../style/Category.css';

const Category = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    
    const [clickedItem, setClickedItem] = useState("");
    const [clickedProductList, setClickedProductList] = useState([]);
    const [cookieList, setCookieList] = useState(getCookie('recentProducts'));
    const [recentProductList, setRecentProductList] = useState([]);

    const onCategorySelect = (id) => {
        setSelectedCategory(id);
    }

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
            const res = await getCategoryProducts();
            if (res) { // res가 undefined인 경우에는 setData를 실행하지 않음
                setData(res.gifts);
            }
            setLoading(false);
        };
        fetchData();
    }, []);


    // 카테고리가 바뀌면 카테고리별 데이터 갱신
    useEffect(() => {
        if (selectedCategory === 0)
            setFilteredData(data)
        else setFilteredData(data.filter(product => product.category === selectedCategory))
    }, [data, selectedCategory])

    //클릭한 상품 리스트가 바뀌면 최근 본 상품 리스트를 갱신
    useEffect(() => {
        const products = data.filter(item => cookieList.includes(item.href));
        setRecentProductList(products);
    }, [cookieList, data])

    if (loading) return <Loading loading={loading} />

    return (
        <>
            <div className="content">
            <Nav />
                <div className="category-box">
                    <Header />
                    <CategoryMenu selectedCategory={selectedCategory} onCategorySelect={onCategorySelect} />
                    <div className='scroll-box'>
                        <Products props={filteredData} onClickProduct={onClickProduct}/>
                    </div>
                </div>
                <RecentProducts props={recentProductList}/>
            </div>
        </>
    )
}

export default Category;