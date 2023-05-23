import React, { useState } from 'react';
import { categories } from '../utils/ClickUtils';
import '../style/CategoryMenu.css';

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
                            <p>{category.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryMenu;