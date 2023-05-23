import React, { useEffect } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import axiosInstance from '../..';
import '../style/FavoriteProducts.css'

const FavoriteProducts = ({ props, onClickProduct }) => {

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
    <div className='favorite-body'>
      <div className='container'>
        <div className='row'>
          {
            props.map((product, index) => {
              return (
                <div key={index} className="likeproduct col-md-6 grid" onClick={() => { onClickProduct(product.href) }}>
                  <img src={`${product.image}`} alt="" />
                  <div className='info'>
                    <p className='product-title'>{product.title}</p>
                    <p className='product-price'>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
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

export default FavoriteProducts;