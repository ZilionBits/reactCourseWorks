import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavigationBar = () => {
  return (
    <>
      <Navbar
        className="fw-bold"
        sticky="top"
        bg="success p-3 text-uppercase"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bolder">
            Socks shop
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
