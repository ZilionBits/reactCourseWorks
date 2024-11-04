import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {

    return (
        <Navbar className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="/">Final Test</Navbar.Brand>
            <Nav.Link href="/booksList">Books List</Nav.Link>
            <Nav.Link href="/addNewBookForm">Add new book</Nav.Link>
      </Container>
    </Navbar>
    );
};

export default NavigationBar;