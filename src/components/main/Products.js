import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import axios from 'axios';
import '../style/Products.css'

const Products = ({ products, onClickFavorite = f => f}) => {
    const [loading, setLoading] = useState(false);

    if(loading) return <Loading loading={loading}/>

    return (
        <div className="container">
          <div className="row">
            {products.map((product, index) => {
                if(product.price > 30000) {
                    return (
                        <div className="col-md-4" key={index}>
                            <img src={`${product.image}`} alt="" width="40%" />
                            <h4>{product.title}</h4>
                            <p>{product.id}</p>
                        </div>
                      );
                }
            })}
          </div>
        </div>
      );
    
}

export default Products;