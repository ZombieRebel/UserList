import React from 'react';
import './Modal.css';
import {Modal} from 'react-bootstrap';

const ModalForm = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
      <Modal.Dialog>
  <Modal.Header closeButton onClick={handleClose} >
    <Modal.Title>Gender Chart</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    {children}
  </Modal.Body>

</Modal.Dialog>
</div>
    )
  };






/* 
<div className="container">
        <div className={showHideClassName}>
          <section className="modal-main">
            {children}
              <button className="btn btn btn-danger" onClick={handleClose}>Close</button>
          </section>
        </div>
      </div> */



  export default ModalForm;