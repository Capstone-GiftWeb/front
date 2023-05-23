import '../style/Modal.css';

const Modal = ({ onClose, item }) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 중지
  };

  return (
    <div className="modal-body" onClick={handleModalClick}>
      <div>
        <button onClick={onClose}>X</button>
        {item.title}
      </div>
    </div>
  );
};

export default Modal;
