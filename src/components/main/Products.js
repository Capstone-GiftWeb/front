import React, { useEffect, useState } from 'react';
import '../style/Products.css'
import axiosInstance from '../..';

const Products = ({ props, onClickProduct }) => {

  return (
    <div className='container-pd'>
      <div className='row'>
        {
          props.map((product, index) => {
            if (index < 10) {
              return (
                <div key={index} className="col-md-3 gird">
                  <img src={`${product.image}`} alt="" width="100%" />
                  <p onClick={(e) => onClickProduct( e, product.href)}>{product.title}</p>
                </div>
              );
            }
          })
        }
      </div>
    </div>
  );

}

export default Products;