import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Button } from "react-bootstrap";

function ModalToast({ title }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add to Cart
      </Button>
        <ToastContainer position="middle-center">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Body className="custom-toast-style"><strong>Successfully added: {title}</strong></Toast.Body>
          </Toast>
        </ToastContainer>
    </>
  );
}

export default ModalToast;
