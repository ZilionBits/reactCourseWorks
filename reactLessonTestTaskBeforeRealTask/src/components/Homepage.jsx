import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center ms-auto">
        <h1>Welcome!</h1>
        <p>You visited a website for a user managment program online!</p>
        <Stack direction="horizontal" gap={3} style={{justifyContent: "center"}}>
        <Button onClick={() => navigate("/navigationBar/registerForm")}>Sign Up</Button>
        <Button onClick={() => navigate("/navigationBar/feedback")}>Feedback</Button>
        </Stack>
      </div>
    </>
  );
};

export default Homepage;
