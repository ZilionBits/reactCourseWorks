import { Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../css/ProductStyles.css";
import ModalForProduct from "./ModalForProduct";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Product = ({ image, title, description, price, quantity, id }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="shadow bg-customCardBg bg-gradient" onClick={handleShow}>
        <Card.Img src={image} className="rounded mx-auto" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Container>
            <Row className="d-flex align-items-end">
              <Col className="d-flex justify-content-start p-0">
                <Card.Text>{price} €</Card.Text>
              </Col>
              <Col className="d-flex justify-content-end p-0">
                <Link
                  to={`/Product/${id}`}
                  className="bg-warning border-0 text-black"
                >
                  Product Details
                </Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <ModalForProduct
        title={title}
        description={description}
        quantity={quantity}
        show={show}
        close={() => setShow(false)}
      />
    </>
  );
};

{
  /* {(!discount || discount == 0) && (
                <Col className="d-flex justify-content-center p-0">
                  <Card.Text>
                    <Image src="src\images\new.png" fluid />
                  </Card.Text>
                </Col>
              )}
              {discount && (
                <Col className="d-flex justify-content-center p-0">
                  <Card.Text>
                    <Image src="src\images\discount.png" fluid />
                  </Card.Text>
                </Col>
              )}
              <Col className="d-flex justify-content-end p-0">
                <Card.Text>Stock: {quantity}</Card.Text>
              </Col> */
}
