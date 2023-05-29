import React, { useEffect, useState } from 'react';
import '../style/RecentProducts.css'

const RecentProducts = ({ props, onDeleteRecentProduct }) => {

  return (
    <div className="lasted">
      <h5>최근본상품 목록</h5>
      <div className='recentContents'>
        {props.map((gift, index) => {
          return (
            <div className="row" key={index}>
              <img src='img/btnX.png' alt="deleteRecentItem" className='btnX' onClick={() => {onDeleteRecentProduct(gift.href)}}/>
              <img src={gift.image} alt="recentItemImage" className='recentItemImage' />
              <p>{gift.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentProducts;
