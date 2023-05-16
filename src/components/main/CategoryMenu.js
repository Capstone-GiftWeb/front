import React, { useState } from 'react';
import '../style/CategoryMenu.css';

const categories = [
    { id: 0, name: "전체", img:"img/category/total.png" },
    { id: 4, name: '식품', img:"img/category/food.png" },
    { id: 5, name: '화장품/향수', img:"img/category/beauty.png" },
    { id: 1, name: '패션', img:"img/category/clothes.png" },
    { id: 2, name: '리빙', img:"img/category/living.png" },
    { id: 8, name: '건강', img:"img/category/health.png" },
    { id: 9, name: '명품 패션', img:"img/category/luxury.png" },
    { id: 7, name: '가전/디지털', img:"img/category/digital.png" },
    { id: 10, name: '꽃배달/도서', img:"img/category/plant.png" },
    { id: 6, name: '레저/스포츠', img:"img/category/sports.png" },
    { id: 3, name: '출산/유아동', img:"img/category/baby.png" },
    { id: 11, name: '반려동물', img:"img/category/pet.png" }
];

const CategoryMenu = ({ onCategorySelect }) => {
    const [isBtnActive, setIsBtnActive] = useState(0);

    return (
        <div className='category-menu'>
            <div className='container'>
                <ul className="list-group list-group-horizontal">
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            className={(category.id === isBtnActive ? "click" : "nonClick")}
                            onClick={() => {
                                onCategorySelect(category.id);
                                setIsBtnActive(category.id);
                            }}
                        >
                            <img src={category.img} alt='menu_image' width={"52%"}/>
                            <p>{category.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryMenu;