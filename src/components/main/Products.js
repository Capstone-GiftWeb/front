import React, { useEffect, useState } from 'react';

import '../style/Products.css'

const Products = ({ props, onClickProduct }) => {

  return (
    <div className='container-pd'>
      <div className='row'>
        {
          props.map((product, index) => {
            return (
              <div key={index} className="col-md-3 grid">
                <img src={`${product.image}`} alt="" />
                <div className='product-title'>
                  <p onClick={() => {onClickProduct(product.href)}}>{product.title}</p>
                  <button>♡</button>
                </div>
              </div>
            );

          })
        }
      </div>
    </div>
  );

}

export default Products;