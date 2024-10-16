import { Product } from "./Product";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const bgTheme = {
  backgroundColor: "#ADAA80",
};

export const ProductList = () => {
  const [fakeData, setFakeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setFakeData(data.products);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Loading... Please Wait</div>;
  }

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 450: 1, 550: 2, 800: 3, 1000: 4 }}
      >
        <Masonry gutter="10px">
          {fakeData.map((product) => (
            <Product
              key={product.id}
              image={product.images[0]}
              title={product.title}
              description={product.description}
              price={product.price}
              id={product.id}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

{
  /* <Container fluid style={bgTheme}>
        <Row>
          {fakeData.map((product) => (
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
      </Container> */
}
