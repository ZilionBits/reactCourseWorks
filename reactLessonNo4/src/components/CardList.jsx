import { Col, Row, Container } from "react-bootstrap";
import { robotData } from "../data/robotData";
import { CardExample } from "./CardExample";

console.log(robotData);

export const CardList = () => {
  return (
    <Container fluid>
      <Row>
        {robotData.map((r) => (
            <Col className="p-3" sm={6} md={4} key={r.id}>
          <CardExample
            name={r.name}
            username={r.username}
            email={r.email}
            avatar={r.avatar}
            reserved={r.reserved}
          />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
