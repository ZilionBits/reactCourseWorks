import { Button, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";
import axios from "axios";
import { UsersDatabaseContext } from "../UsersDatabase/UsersDatabase";
import { Outlet, Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  const { selectedUsers, addSelectedUsers } = useContext(UsersDatabaseContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://dummyjson.com/users/add", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
      })
      .then((res) => addSelectedUsers(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form style={{ width: "50vw", margin: "auto", marginBottom: "10px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            min="0"
            max="150"
          />
        </Form.Group>
        <Stack direction="horizontal">
          <Button type="submit">Sign in</Button>
          <Button className="ms-auto">
            <Link
              to={"userslist"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Show Users
            </Link>
          </Button>
        </Stack>
      </Form>
      <Outlet/>
    </>
  );
};

export default RegisterForm;
