import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CartListDataContext } from "./CartListDataProvider";
import { useContext } from "react";

function CartListModal({ show, handleClose }) {
  const { selectedItems } = useContext(CartListDataContext);

  const sum = selectedItems
    .map((i) => i.price)
    .reduce((total, number) => {
      return total + number;
    }, 0);

  console.log(selectedItems);

  const uniqueDisplay = selectedItems.reduce((unique, item) => {
    const isUnique = unique.find((u) => u.id === item.id);
    if (isUnique) {
      isUnique.quantity += 1;
      console.log(isUnique);
    } else {
      unique.push({
        id: item.id,
        name: item.name,
        quantity: 1,
      });
    }
    return unique;
  }, []);

  console.log(uniqueDisplay);

  return (
    <>
      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Products added</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {uniqueDisplay.map((i) => (
              <p>
                <strong>{i.name}</strong> - {i.quantity} pcs
              </p>
            ))}
            <Modal.Footer>
              <strong>Total price: {sum}€</strong>
            </Modal.Footer>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Back to shopping
            </Button>
            <Button variant="primary">Continue payment</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default CartListModal;

// const uniqueDisplay = [...new Set(selectedItems.map((i) => i.name))];
