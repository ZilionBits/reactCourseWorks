import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import iceCreamData from "../data/iceCreamData.json";
import { useState } from "react";

export const IceShopUI = () => {
  const discount = 10;
  const [counter, setCounter] = useState([]);

  const getSum = (total, number) => {
    return total + number;
  };
  const sum = counter.map((i) => i.price).reduce(getSum, 0);

  return (
    <>
      <Container style={{ minWidth: "720px", maxWidth: "720px" }}>
        <Row>
          {iceCreamData.map((i) => (
            <Col
              key={i.key}
              xs={4}
              style={{
                backgroundColor: i.color,
                color: i.fontColor,
                height: "240px",
                alignContent: "center",
                textAlign: "center",
              }}
              onClick={() => setCounter([...counter, i])}
            >
              {i.flavor}
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={8} style={{ backgroundColor: "black" }}>
            <Row>
              {iceCreamData.map((i) => (
                <Col key={i.key} xs={6} style={{ color: i.color }}>
                  {i.flavor}:{" "}
                  {counter.filter((ice) => ice.key === i.key).length}
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={4} style={{ backgroundColor: "white" }}>
            <Row xs={1}>
              <Col>Discount: {discount} %</Col>
              <Col>Subtotal: {sum} €</Col>
              <Col>
                <strong>
                  Total: {(sum * (1 - discount / 100)).toFixed(2)}
                </strong>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
