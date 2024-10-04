import { Product } from "./Product";
import productsData from "../data/productsData.json";
import { Container, Row, Col } from "react-bootstrap";

export const ProductList = () => {
  return (
    <>
      <Container>
        <Row>
          {productsData.map((product) => (
            <Col className="p-2" sm={6} md={4} key={product.title}>
              <Product
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
