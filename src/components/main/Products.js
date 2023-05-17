import React, { useEffect } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import axiosInstance from '../..';
import '../style/Products.css'

const Products = ({ props, onClickProduct }) => {

  const onClickFavorite = (product) => {
    const href = product.href;
    // 버튼 색 변경
    product.favorite = !product.favorite

    // 서버로 전송
    axiosInstance({
      method: "POST",
      url: "/" + href,
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

  useEffect(() => {

  }, [])

  return (
    <div className='products-body'>
      <div className='container'>
        <div className='row'>
          {
            props.map((product, index) => {
              return (
                <div key={index} className="product col-md-3 grid" onClick={() => { onClickProduct(product.href) }}>
                  <img src={`${product.image}`} alt="" />
                  <p className='product-title'>{product.title}</p>
                  <p className='product-price'>{product.price}원</p>
                  <p className='product-title' onClick={() => { onClickProduct(product.href) }}>{product.title}</p>
                  <p className='product-price'>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                  <div className='icons'>
                    {product.favorite ?
                      <HeartFilled style={{ color: "red", fontSize: "20px" }} onClick={() => onClickFavorite(product)} /> :
                      <HeartOutlined style={{ fontSize: "20px" }} onClick={() => onClickFavorite(product)} />}
                  </div>
                </div>
              );

            })
          }
        </div>
      </div>
    </div>
  );

}

export default Products;