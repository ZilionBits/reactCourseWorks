import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import CartListModal from './CartListModal';

function ShopNavBar() {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  return (
    <>
      <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home"><h1><i>Vegetables shop</i></h1></Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="bg-success" sticky='top'>
        <Container>
          <Button onClick={handleShow}>Check my shopping list</Button>
        </Container>
      </Navbar>

      <CartListModal 
      show={show}
      handleClose={handleClose}
      />
    </>
  );
}

export default ShopNavBar;