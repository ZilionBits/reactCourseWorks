import { UsersCard } from "./UsersCard";
import { useContext, useEffect, useState } from "react";
import { UsersDatabaseContext } from "../UsersDatabase/UsersDatabase";
import axios from "axios";
import editIcon from "../images/icons8-edit-64.png";
import { Form } from "react-bootstrap";

const UsersList = () => {
  const { selectedUsers } = useContext(UsersDatabaseContext);
  const [importedUsers, setImportedUsers] = useState([]);
  const [filterByAge, setFilterByAge] = useState(0);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((users) => setImportedUsers(users.data.users))
      .catch((error) => console.log(error));
  }, []);

  console.log(importedUsers);

  const handleChange = (e) => {
    setFilterByAge(e.target.value);
  };

  console.log(filterByAge)

  return (
    <>
    <Form style={{marginBottom: "20px"}}>
        <Form.Label>Filter by age:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          onChange={handleChange}
          required
          min="0"
          max="150"
        />
      </Form>
      {selectedUsers
        .filter((u) => u.age >= filterByAge)
        .map((u, idx) => (
        <UsersCard
          key={idx}
          firstName={u.firstName}
          lastName={u.lastName}
          age={u.age}
          editIcon={editIcon}
        />
      ))}
      {importedUsers
        .filter((u) => u.age >= filterByAge)
        .map((u, idx) => (
          <UsersCard
            key={idx}
            firstName={u.firstName}
            lastName={u.lastName}
            age={u.age}
            editIcon={editIcon}
          />
        ))}
    </>
  );
};

export default UsersList;
