import { categories } from '../utils/ClickUtils';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import '../style/Modal.css';

const getCategoryNameById = (id) => {
  const category = categories.find((item) => item.id === id);
  return category ? category.name : "";
};

const Modal = ({ onClose, item, onClickFavorite, favoriteList }) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 중지
  };

  return (
    <div className='modal'>
      <div className="modal-body" onClick={handleModalClick}>
        <div>
          <img src='img/btnX.png' alt="deleteModal" className='btnX' onClick={onClose} />
          <div className='modal-contents'>
            <img src={item.image} alt="modalItemImage" className='modalItemImage' />
            <div className='modal-details'>
              <p className='company'>{item.company}</p>
              <p className='title'>{item.title}</p>
              {/* <p className='category'>{getCategoryNameById(item.category)}</p> */}
              <p className='price'>\{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              <div className='modal-btns'>
                <a href={`https://gift.kakao.com/${item.href}`} className='btnLink'>카카오톡 선물하기</a>
                {favoriteList.some(href => item.href.includes(href)) ? (
                  <HeartFilled
                    className="btnFavorite"
                    style={{ color: 'red', fontSize: '20px' }}
                    onClick={() => onClickFavorite(item)}
                  />
                ) : (
                  <HeartOutlined
                    className="btnFavorite"
                    style={{ fontSize: '20px' }}
                    onClick={() => onClickFavorite(item)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
