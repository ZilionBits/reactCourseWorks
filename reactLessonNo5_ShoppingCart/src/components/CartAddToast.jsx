import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "react-bootstrap";

function CartAddToast({ show, handleClose, name }) {
  return (
    <ToastContainer className="p-3" position={"middle-center"}>
      <Toast onClose={handleClose} show={show} delay={2000} autohide>
        <Toast.Header>
          <strong className="me-auto">{name}</strong>
        </Toast.Header>
        <Toast.Body><strong>Successfully added!</strong></Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default CartAddToast;
