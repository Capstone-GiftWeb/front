import React, { useEffect, useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import axiosInstance from '../..';
import Modal from './Modal';
import ModalPortal from './Portal';
import { setClickFavorite } from '../utils/ClickUtils'
import '../style/FavoriteProducts.css'

const FavoriteProducts = ({ props, onClickProduct }) => {
  const [modalOn, setModalOn] = useState(false);
  const [clickModalItem, setClickModalItem] = useState();

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <div className='favorite-body'>
      <div className='container'>
        <div className='row'>
          {
            props.map((product, index) => {
              return (
                <div key={index} className="likeproduct col-md-6 grid" onClick={() => { setClickModalItem(product); onClickProduct(product.href); handleModal(); }}>
                  <img src={`${product.image}`} alt="" />
                  <div className='info'>
                    <img src='img/btnX.png' alt="deleteRecentItem" className='btnX' onClick={() => { }} />
                    <p className='product-title'>{product.title}</p>
                    <p className='product-price'>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                  </div>
                </div>
                
              );
            })
          }
        </div>
      </div>
      <ModalPortal>
        {modalOn && <Modal onClose={handleModal} item={clickModalItem} onClickFavorite={setClickFavorite} />}
      </ModalPortal>
    </div>
  );

}

export default FavoriteProducts;