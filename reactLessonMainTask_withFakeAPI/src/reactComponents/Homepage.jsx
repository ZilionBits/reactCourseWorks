import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../contextComponents/AuthenticationContext";

export const Homepage = () => {
  const navigate = useNavigate();
  const { setStatus } = useContext(AuthenticationContext);

  return (
    <div
      style={{
        backgroundColor: "#ADAA80",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Welcome to various items shop.</h1>
      <Stack>
        <Button
          className="bg-warning border-0 text-black"
          onClick={() => navigate("/product")}
        >
          Check our products
        </Button>
        <Button
          className="bg-warning border-0 text-black"
          onClick={() => {
            navigate("/login");
            setStatus();
          }}
        >
          Login
        </Button>
      </Stack>
    </div>
  );
};
