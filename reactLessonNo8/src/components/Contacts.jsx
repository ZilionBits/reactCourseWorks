import { useNavigate } from "react-router-dom";

const Contacts = () => {

    const navigate = useNavigate();

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Contacts;
