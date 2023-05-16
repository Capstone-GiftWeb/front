import React, { useState } from 'react';
import '../style/CategoryMenu.css';

const categories = [
    { id: 0, name: "전체" },
    { id: 4, name: '식품' },
    { id: 5, name: '화장품/향수' },
    { id: 1, name: '패션' },
    { id: 2, name: '리빙' },
    { id: 8, name: '건강' },
    { id: 9, name: '명품 패션' },
    { id: 7, name: '가전/디지털' },
    { id: 10, name: '꽃배달/도서' },
    { id: 6, name: '레저/스포츠' },
    { id: 3, name: '출산/유아동' },
    { id: 11, name: '반려동물' }
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
                            className={"list-group-item " + (category.id === isBtnActive ? "click" : "")}
                            onClick={() => {
                                onCategorySelect(category.id);
                                setIsBtnActive(category.id);
                            }}
                        >
                            <image src="" alt="menu image" />
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryMenu;