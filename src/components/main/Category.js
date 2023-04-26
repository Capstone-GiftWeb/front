import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import Products from './Products';
import { getProducts } from "../utils/Data";
import Loading from "./Loading";
import CategoryMenu from './CategoryMenu';
import '../style/Category.css';

const Category = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);

    const onClickProduct = (href) => {
        console.log(href)
      }

    const onCategorySelect = (id) => {
        setSelectedCategory(id)
    }

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
        if(selectedCategory === 0)
            setFilteredData(data)
        else setFilteredData(data.filter(product => product.category === selectedCategory))
    }, [data, selectedCategory])

    if (loading) return <Loading loading={loading} />

    return (
        <>
            <div className="category-content">
            <Nav />
                <div className="category-box">
                    <Header />
                    <CategoryMenu selectedCategory={selectedCategory} onCategorySelect={onCategorySelect} />
                    <div className='scroll-box'>
                        <Products props={filteredData} onClickProduct={onClickProduct} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;