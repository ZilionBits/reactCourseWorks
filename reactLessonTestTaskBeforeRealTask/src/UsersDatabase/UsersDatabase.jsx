import { createContext, useState } from "react";

export const UsersDatabaseContext = createContext();

const UsersDatabaseProvider = ({ children }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const addSelectedUsers = (item) => {
    if(item) {
    setSelectedUsers([...selectedUsers, item]);
    }
  };

  return (
    <>
      <UsersDatabaseContext.Provider
        value={{ selectedUsers, addSelectedUsers }}
      >
        {children}
      </UsersDatabaseContext.Provider>
    </>
  );
};

export default UsersDatabaseProvider;
