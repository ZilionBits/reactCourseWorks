import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavBar.css";

export const NavigationBar = () => {
  return (
    <>
      <Navbar sticky="top" bg="customNavBar" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand href="#home" className="d-flex flex-row">
            <img
              src="src\images\socksShopLogo.png"
              alt="socks eshop logo"
              style={{ height: 40 }}
            />
            <h1 className="m-0 p-1">Socks heaven</h1>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
