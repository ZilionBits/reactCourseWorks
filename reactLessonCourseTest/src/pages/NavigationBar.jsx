import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from '../contextGlobal/AuthContext';

const NavigationBar = () => {

  const {userLogout} = useContext(AuthContext)

    return (
        <Navbar className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="/">Final Test</Navbar.Brand>
            <Nav.Link href="/booksList">Books List</Nav.Link>
            <Nav.Link href="/addNewBookForm">Add new book</Nav.Link>
            <Nav.Link onClick={userLogout}>Logout</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
      </Container>
    </Navbar>
    );
};

export default NavigationBar;