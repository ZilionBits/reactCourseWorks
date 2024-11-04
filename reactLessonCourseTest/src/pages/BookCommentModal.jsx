import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import BookCommentToast from "./BookCommentToast";
import { useState } from "react";

export const BookCommentModal = ({show, handleClose}) => {

  const [toastShow, setShowToast] = useState(true);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>Title</Modal.Body>
            <Modal.Body>Text</Modal.Body>
            <Modal.Footer>
            <Button>Submit</Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
            <BookCommentToast
            toastShow={toastShow}
            setShowToast={setShowToast}
            />
        </Modal>
    );
};