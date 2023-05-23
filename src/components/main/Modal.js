import { categories } from '../utils/ClickUtils';
import '../style/Modal.css';

const getCategoryNameById = (id) => {
  const category = categories.find((item) => item.id === id);
  return category ? category.name : "";
};

const Modal = ({ onClose, item }) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 중지
  };

  return (
    <div className="modal-body" onClick={handleModalClick}>
      <div>
        <img src='img/btnX.png' alt="deleteModal" className='btnX' onClick={onClose} />
        <div className='modal-contents'>
          <img src={item.image} alt="modalItemImage" className='modalItemImage' />
          <div className='modal-details'>
            <p className='company'>{item.company}</p>
            <p className='title'>{item.title}</p>
            <p className='category'>{getCategoryNameById(item.category)}</p>
            <p className='price'>\{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
