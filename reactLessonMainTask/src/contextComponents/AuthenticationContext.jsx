import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [status, setStatus] = useState("Sign In");

  const toggleStatus = () => {
    setStatus(status === "Sign In" ? "Log Out" : "Sign In");
  };

  return (
    <AuthenticationContext.Provider value={{ status, toggleStatus }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
