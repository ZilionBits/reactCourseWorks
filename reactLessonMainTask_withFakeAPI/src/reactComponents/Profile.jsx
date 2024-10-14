import { Image, Button, Stack } from "react-bootstrap";
import { useContext } from "react";
import { AuthenticationContext } from "../contextComponents/AuthenticationContext";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { toggleStatus } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  return (
    <Stack gap={3} style={{ backgroundColor: "black", alignItems: "center" }}>
      <Image
        style={{ height: "150px"}}
        src="src\images\discount.png"
      />

      <Button
        className="bg-danger border-0"
        onClick={() => {
          toggleStatus();
          navigate("/");
        }}
      >
        Logout
      </Button>
    </Stack>
  );
};
