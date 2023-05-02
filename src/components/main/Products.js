import React, { useEffect, useState } from 'react';
import '../style/Products.css'

const Products = ({ props, onClickProduct }) => {

  return (
    <div className='product-container'>
      <div className='row'>
        {
          props.map((product, index) => {
            return (
              <div key={index} className="col-md-3 gird">
                <img src={`${product.image}`} alt="" width="100%" />
                <div className='product-title'>
                <p onClick={() => onClickProduct(product.href)}>{product.title}</p>
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