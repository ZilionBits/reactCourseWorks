import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartAddToast from "./CartAddToast";
import { useState } from "react";

function ItemCard({ name, price, category, image, item , addSelectedItems}) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <>
      <Card className="m-2">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price} €</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              handleShow();
              addSelectedItems(item);
            }}
          >
            Add to Basket
          </Button>
        </Card.Body>
        <CartAddToast show={show} handleClose={handleClose} name={name} />
      </Card>
    </>
  );
}

export default ItemCard;



  // const [selectedItems, setSelectedItems] = useState([]);

  // const addSelectedItems = () => {
  //   setSelectedItems([...selectedItems, item]);
  //   console.log(item);
  // };