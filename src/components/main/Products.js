import React, { useEffect, useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import axiosInstance from '../..';
import Modal from './Modal';
import ModalPortal from './Portal';

import '../style/Products.css';

const Products = ({ props, onClickProduct, onClickFavorite }) => {
  const [modalOn, setModalOn] = useState(false);
  const [clickModalItem, setClickModalItem] = useState();

  const handleClick = (product) => {
    setClickModalItem(product);
    onClickProduct(product.href);
    handleModal();
  };

  const handleModal = () => {
    setModalOn(!modalOn);
  };
  
  return (
    <div className="products-body">
      <div className="container">
        <div className="row">
          {props.map((product, index) => {
            return (
              <div key={index} className="product col-md-3 grid" >
                <img src={`${product.image}`} alt="" onClick={() =>handleClick(product)} />
                <p className="product-title" onClick={() =>handleClick(product)} >{product.title}</p>
                <div className="product-details">
                  <p className="product-price" onClick={() =>handleClick(product)} >{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                  {product.favorite ? (
                    <HeartFilled
                      className="icons"
                      style={{ color: 'red', fontSize: '20px' }}
                      onClick={() => onClickFavorite(product)}
                    />
                  ) : (
                    <HeartOutlined
                      className="icons"
                      style={{ fontSize: '20px' }}
                      onClick={() => onClickFavorite(product)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ModalPortal>
        {modalOn && <Modal onClose={handleModal} item={clickModalItem} onClickFavorite={onClickFavorite}/>}
      </ModalPortal>
    </div>
  );
};

export default Products;
