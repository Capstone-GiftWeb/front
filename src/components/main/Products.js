import React, { useEffect, useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import axiosInstance from '../..';
import Modal from './Modal';
import ModalPortal from "./Portal";

import '../style/Products.css'

const Products = ({ props, onClickProduct }) => {
  const [modalOn, setModalOn] = useState(false);
  const [clickModalItem, setClickModalItem] = useState();

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  const onClickFavorite = (product) => {
    const href = product.href;
    // 버튼 색 변경
    product.favorite = !product.favorite

    //서버로 전송
    // axiosInstance({
    //   method: "POST",
    //   url: "/" + href,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //     href
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  return (
    <div className='products-body'>
      <div className='container'>
        <div className='row'>
          {
            props.map((product, index) => {
              return (
                <div key={index} className="product col-md-3 grid" onClick={() => {
                  setClickModalItem(product);
                  onClickProduct(product.href);
                  handleModal();
                  console.log("click!");
                }}>
                  <ModalPortal>
                    {modalOn && <Modal onClose={handleModal} item={clickModalItem} />}
                  </ModalPortal>
                  <img src={`${product.image}`} alt="" />
                  <p className='product-title'>{product.title}</p>
                  <div className='product-details'>
                    <p className='product-price'>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                    {product.favorite ?
                      <HeartFilled className='icons' style={{ color: "red", fontSize: "20px" }} onClick={() => onClickFavorite(product)} /> :
                      <HeartOutlined className='icons' style={{ fontSize: "20px" }} onClick={() => onClickFavorite(product)} />}
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