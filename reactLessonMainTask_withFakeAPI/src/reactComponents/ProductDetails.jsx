import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/ProductDetail.css";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((p) => setProductDetails(p.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-custom-detail">
      <Container fluid>
        <Row>
          <Col xs={5}>
            <Image src={productDetails.image} fluid />
          </Col>
          <Col>
            <Stack gap={2}>
              <h1>{productDetails.title}</h1>
              <p>{productDetails.description}</p>
              <p>Category: {productDetails.category}</p>
              <p>Price: {productDetails.price}€</p>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
