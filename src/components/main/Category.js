import React, { useEffect, useState, useRef } from 'react';

import Nav from './Nav';
import Header from './Header';
import Products from './Products';
import Loading from "./Loading";
import CategoryMenu from './CategoryMenu';
import RecentProducts from './RecentProducts';

import { getCategoryProducts } from "../utils/Data";
import { setRecentHistory, filterDataByList, deleteRecentHistory, redirectPage, setClickFavorite } from '../utils/ClickUtils'

import '../style/Category.css';

const Category = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState(0);
    const [categoryData, setCategoryData] = useState([]);

    const setScrollRef = useRef(0)

    const onScrollToTop = () => {
        if (setScrollRef.current) {
            setScrollRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    const onCategorySelect = (id) => {
        setSelectedCategory(id);
    }

    const onClickProduct = (href) => {
        setRecentHistory(href); // 로컬 스토리지에 저장

        const filtered = filterDataByList(data); // 리스트로 데이터 필터링
        setFilteredData(filtered); // 필터링된 데이터 설정

        redirectPage(href); // 클릭한 값을 서버로 전송 > 리다이렉트!
    }

    const onClickFavorite = (product) => {
        setClickFavorite(product);
    }

    const onDeleteRecentProduct = (href) => {
        deleteRecentHistory(href);

        const filtered = filterDataByList(data); // 리스트로 데이터 필터링
        setFilteredData(filtered); // 필터링된 데이터 설정
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
            setCategoryData(data)
        else setCategoryData(data.filter(product => product.category === selectedCategory))
    }, [data, selectedCategory])

    useEffect(() => {
        if (data.length > 0) {
            const filtered = filterDataByList(data);
            setFilteredData(filtered);
        }
    }, [data])

    if (loading) return <Loading loading={loading} />

    return (
        <>
            <div className='category-body'>
                <div className="content">
                    <Nav />
                    <div className="category-box">
                        <Header />
                        <CategoryMenu selectedCategory={selectedCategory} onCategorySelect={onCategorySelect} />
                        <div className='horizontal-box'>
                            <div className='scroll-box' ref={setScrollRef}>
                                <Products props={categoryData} onClickProduct={onClickProduct} onClickFavorite={onClickFavorite} />
                            </div>
                            <div className='nonScroll-box'>
                                <RecentProducts props={filteredData} onDeleteRecentProduct={onDeleteRecentProduct}/>
                                <img src='img/upward.png' onClick={onScrollToTop} alt="topBtn" id='topBtn' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;