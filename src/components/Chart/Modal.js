import React from 'react';
import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className="container">
        <div className={showHideClassName}>
          <section className="modal-main">
            {children}
              <button className="btn btn btn-danger" onClick={handleClose}>close</button>
          </section>
        </div>
      </div>
    );
  };

  export default Modal;