import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitRegistrationForm = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      setError("Your passwords do not match");
      return;
    }

    axios
      .post(
        "https://user-registration-wjqr.onrender.com/api/v1/users/register",
        formData
      )
      .then((res) => {
        if (res.data.status === "success") {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Please Register here</h1>
      <form onSubmit={submitRegistrationForm}>
        <label>
          First name
          <input
            required
            name="firstName"
            onChange={handleOnChange}
            type="text"
          />
        </label>
        <label>
          Last name
          <input
            required
            name="lastName"
            onChange={handleOnChange}
            type="text"
          />
        </label>
        <label>
          Email name
          <input required name="email" onChange={handleOnChange} type="email" />
        </label>
        <label>
          Password
          <input
            required
            name="password"
            onChange={handleOnChange}
            type="password"
          />
        </label>
        <label>
          Repeat password
          <input
            required
            name="repeatPassword"
            onChange={handleOnChange}
            type="password"
          />
        </label>
        <button>Register me</button>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default Register;
