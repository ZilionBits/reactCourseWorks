import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import CartListModal from "./CartListModal";

const ItemCardList = () => {
    
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
    )
      .then((get) => get.json())
      .then((data) => setItemData(data))
      .catch((error) => console.log(error));
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);

  const addSelectedItems = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <>
    <Container fluid>
      <Row>
        {itemData.map((item) => (
          <Col
          key={item.id} sm={6} md={4} lg={3}>
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
    <CartListModal items={selectedItems}/>
    </>
  );
};

export default ItemCardList;
