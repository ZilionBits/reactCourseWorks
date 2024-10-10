import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalToast from "./ModalToast";
import "../css/ModalAndToast.css";

function ModalForProduct({ title, description, quantity, show, close }) {
  const handleClose = () => close();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className="custom-modal-style">
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Body>Quantity: {quantity}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <ModalToast title={title} />
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default ModalForProduct;
