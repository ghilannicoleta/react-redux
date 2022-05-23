import React from "react";
import ReactDOM from "react-dom";
// import createPortal  from 'react-dom'
const modalRoot = document.querySelector('#modal-root')


const PortalModal = ({ message, isOpen, onClose }) => {
  // if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div>
      <h2>{message}</h2>
      {/* <button onClick={onClose}>Close</button> */}
    </div>
    , modalRoot
  );
};

export default PortalModal;
