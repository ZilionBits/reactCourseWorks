import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#ADAA80",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Welcome to various items shop.</h1>
      <Button
        className="bg-warning border-0 text-black"
        onClick={() => navigate("/product")}
      >
        Check our products
      </Button>
    </div>
  );
};
