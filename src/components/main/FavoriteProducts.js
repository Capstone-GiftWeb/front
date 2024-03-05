import React, { useState } from 'react';

import Modal from './Modal';
import ModalPortal from './Portal';
import { onDatNum } from "../utils/otherUtils";

import '../style/FavoriteProducts.css'

const FavoriteProducts = ({ props, onClickProduct, onClickFavorite, favoriteList }) => {
  const [modalOn, setModalOn] = useState(false);
  const [clickModalItem, setClickModalItem] = useState();

  return (
    <div className='favorite-body'>
      <div className='container'>
        <div className='row'>
          {
            props.map((product) => {
              return (
                <div key={product.href} className="likeproduct col-md-6 grid">
                  <div className='goModal'>
                    <div className="clickarea" onClick={() => { setClickModalItem(product); onClickProduct(product.href); setModalOn(!modalOn);}}>
                      <img src={`${product.image}`} alt="" />
                      <div className='info'>
                        <p className='product-title'>{product.title}</p>
                        <p className='product-price'>{onDatNum(product.price)}원</p>
                      </div>
                    </div>
                    <div className='btnX' onClick={() => onClickFavorite(product)}>
                      <img src='img/btnX.png' alt="deleteRecentItem" />
                    </div>
                  </div>
                </div>

              );
            })
          }
        </div>
      </div>
      <ModalPortal>
        {modalOn && <Modal onClose={handleModal} item={clickModalItem} onClickFavorite={onClickFavorite} favoriteList={favoriteList} />}
      </ModalPortal>
    </div>
  );

}

export default FavoriteProducts;