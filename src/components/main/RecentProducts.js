import React, { useEffect, useState } from 'react';
import { Cookie } from 'universal-cookie';
import '../style/RecentProducts.css'

const RecentProducts = (props) => {
    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const cookieValue = Cookies.get('recentProducts');
        if(cookieValue) {
            setRecentProducts(JSON.parse(cookieValue));
        }
    }, []);

    return (
        <div className="lasted">
            <h3>최근본상품 목록</h3>
            {
                recentProducts.map((a, i) => {
                    return (
                        <div className="row" shoes={props.shoes[i]} i={i} key={i} onClick={() => { history.push('/detail/' + props.shoes[a].id) }}>
                            <img src={"https://codingapple1.github.io/shop/shoes" + (props.shoes[a].id + 1) + ".jpg"} width="100%" alt="이미지" />
                            <h5>{props.shoes[a].title}</h5>
                            <p>{props.shoes[a].price}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RecentProducts;