import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/Contacts")
    }

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleSubmit}>Go to Contacts</button>
    </div>
  );
};

export default About;
