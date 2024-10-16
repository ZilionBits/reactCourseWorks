import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import { useState, useEffect, useContext } from "react";
import { CartListDataContext } from "./CartListDataProvider";

const ItemCardList = () => {
  const [itemData, setItemData] = useState([]);

  const { addSelectedItems } = useContext(CartListDataContext);

  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
    )
      .then((get) => get.json())
      .then((data) => setItemData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          {itemData.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3}>
              <ItemCard
                name={item.name}
                price={item.price}
                category={item.category}
                image={item.image}
                item={item}
                addSelectedItems={addSelectedItems}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ItemCardList;
