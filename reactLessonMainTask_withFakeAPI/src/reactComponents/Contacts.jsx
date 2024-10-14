import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Contacts = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#ADAA80",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>I'm learning React.</h1>
      <h2>Darius Žilionis</h2>

      <Button
        className="bg-warning border-0 text-black"
        onClick={() => navigate(-1)}
      >
        Go back one step
      </Button>
    </div>
  );
};
