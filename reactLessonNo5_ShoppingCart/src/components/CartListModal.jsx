import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CartListModal({ show, handleClose, items }) {
  
  console.log(items);

  return (
    <>
      {show && 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Products added</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {items?.map(i =>
            <p>{i.name}</p>)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Back to shopping
            </Button>
            <Button variant="primary">Continue payment</Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
}

export default CartListModal;
