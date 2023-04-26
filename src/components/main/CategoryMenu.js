import React from 'react';
import '../style/CategoryMenu.css';

const categories = [
    { id: 0, name: "전체" },
    { id: 1, name: '식품' },
    { id: 2, name: '화장품/향수' },
    { id: 3, name: '패션' },
    { id: 4, name: '리빙' },
    { id: 5, name: '건강' },
    { id: 6, name: '명품 패션' },
    { id: 7, name: '가전/디지털' },
    { id: 8, name: '꽃배달/도서' },
    { id: 9, name: '레저/스포츠' },
    { id: 10, name: '출산/유아동' },
    { id: 11, name: '반려동물' }
];

const CategoryMenu = ({onCategorySelect }) => {
    return (
        <div className='category-menu-container'>
            <ul className="list-group list-group-horizontal">
                {categories.map((category) => (
                    <li
                        key={category.id}
                        className="list-group-item"
                        onClick={() => onCategorySelect(category.id)}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryMenu;