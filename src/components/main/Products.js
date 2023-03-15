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
                if(product.vote_average > 30) {
                    return (
                        <div className="col-md-4" key={index}>
                            <img src={`${product.img}`} alt="" width="80%" />
                            <h4>{product.title}</h4>
                            <p>{product.vote_average}</p>
                        </div>
                      );
                }
            })}
          </div>
        </div>
      );
    
}

export default Products;