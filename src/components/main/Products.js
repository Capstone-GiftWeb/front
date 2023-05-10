import React, { useEffect, useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import axiosInstance from '../..';
import '../style/Products.css'

const Products = ({ props, onClickProduct }) => {

  const onClickFavorite = (product) => {
    const href = product.href
    // 버튼 색 변경
    product.favorite = !product.favorite

    // 서버로 전송
    axiosInstance({
      method: "POST",
      url: "/favorite/" + href,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        href
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className='container-pd'>
      <div className='row'>
        {
          props.map((product, index) => {
            return (
              <div key={index} className="col-md-3 grid">
                <img src={`${product.image}`} alt="" />
                <div className='product-title'>
                  <p onClick={() => { onClickProduct(product.href) }}>{product.title}</p>
                  <div className='icons'>
                    {product.favorite?
                    <HeartFilled style={{ color: "red", fontSize: "20px" }} onClick={() => onClickFavorite(product)} />:
                    <HeartOutlined style={{ fontSize: "20px" }} onClick={() => onClickFavorite(product)} />}
                  </div>
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