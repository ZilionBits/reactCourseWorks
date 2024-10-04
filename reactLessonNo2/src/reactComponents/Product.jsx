import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const Product = ({ image, title, description, price, quantity }) => {
  return (
    <>
      <Card className="border border-success shadow text-bg-light">
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Container>
            <Row>
              <Col className="d-flex justify-content-start p-0">
                <Card.Text>{price}</Card.Text>
              </Col>
              <Col className="d-flex justify-content-end p-0">
                <Card.Text>Stock: {quantity}</Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};