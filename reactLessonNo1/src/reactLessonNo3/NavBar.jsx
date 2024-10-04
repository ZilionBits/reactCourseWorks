import "./styles.css";
import styles from "./NavBar.module.css";
import { StyledButton } from "./StyledNavBar";
import { Breadcrumb } from "react-bootstrap";
import { Alert } from "@mui/material";

const NavBar = () => {
  const buttonStyle = {
    color: "blue",
    backgroundColor: "pink",
  };

  return (
    <div>
      <nav style={{ backgroundColor: "aliceblue", padding: "50px 30px" }}>
        NavBar
      </nav>
      <button style={buttonStyle}>Inline button</button>
      <button className="css-button">CSS button</button>
      <button className={styles.buttonModuleCss}>Module CSS</button>
      <StyledButton>Styled components button</StyledButton>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <button type="button" class="btn btn-success">
        Bootstrap button
      </button>
      <Alert severity="info">This is an info Alert.</Alert>

    </div>
  );
};

export default NavBar;
