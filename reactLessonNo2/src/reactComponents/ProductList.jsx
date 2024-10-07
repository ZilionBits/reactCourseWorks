import { Product } from "./Product";
import productsData from "../data/productsData.json";
import { Container, Row, Col } from "react-bootstrap";

const bgTheme = {
  backgroundColor: "#ADAA80",
};

export const ProductList = () => {
  return (
    <>
      <Container fluid style={bgTheme}>
        <Row>
          {productsData.map((product) => (
            <Col className="p-3" sm={6} md={4} key={product.title}>
              <Product
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                discount={product.discount}
                quantity={product.quantity}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
