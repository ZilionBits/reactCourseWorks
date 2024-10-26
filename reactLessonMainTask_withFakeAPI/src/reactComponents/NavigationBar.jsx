import { Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavBar.css";
import { AuthenticationContext } from "../contextComponents/AuthenticationContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const { user } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar sticky="top" bg="customNavBar" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand className="d-flex flex-row">
            <h1 className="m-0 p-1">Goods</h1>
          </Navbar.Brand>
          <Navbar.Text>
            <h3>
              {user.username === ""
                ? "Please Sign In"
                : `Welcome ${user.username}!`}
            </h3>
          </Navbar.Text>
          <Nav className="gap-3">
            <Link
              className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              to="/"
            >
              Home
            </Link>
            <Link
              className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              to="/Product"
            >
              Product
            </Link>
            <Link
              className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              to="/Contacts"
            >
              Contacts
            </Link>
            {user.username === "" ? (
              <Button
                variant="warning"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            ) : (
              <Button variant="warning" onClick={() => navigate("/Profile")}>
                Profile
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
