import React, { useEffect, useState } from 'react';
import '../style/RecentProducts.css'

const RecentProducts = ({ props }) => {

  return (
    <div className="lasted">
      <h5>최근본상품 목록</h5>
      <div className='recentContents'>
        {props.map((gift, index) => {
          return (
            <div className="row" key={index}>
              <img src={gift.image} alt="" />
              <p>{gift.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentProducts;