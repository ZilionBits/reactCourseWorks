import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    permissions: [],
  });

  const navigate = useNavigate();
  const location = useLocation();

  const login = (user) => {
    if (user === "admin") {
      setUser({ username: user, permissions: ["update_products"] });
    } else {
      setUser({
        username: user,
        permissions: ["read_products"],
      });
    }
    navigate("/profile");
  };

  const logout = () => {
    setUser({ username: "", permissions: [] });
    navigate("/");
  };
  
  return (
    <AuthenticationContext.Provider
      value={{ user, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
