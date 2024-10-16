import React from "react";
import Toast from "react-bootstrap/Toast";
import { ToastContainer, Image, Stack } from "react-bootstrap";

function AddProductFormToast({
  show,
  disableShow,
  title,
  thumbnail,
  description,
  price,
  category,
}) {
  return (
    <ToastContainer className="p-3" position={"bot-center"}>
      <Toast
        bg="success"
        onClose={disableShow}
        show={show}
        delay={5000}
        autohide
      >
        <Toast.Body>
          <Image src={thumbnail} fluid />
          <Stack>
            <p className="me-auto">{title}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{price}</p>
            <strong>Succesfully added!</strong>
          </Stack>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default AddProductFormToast;
