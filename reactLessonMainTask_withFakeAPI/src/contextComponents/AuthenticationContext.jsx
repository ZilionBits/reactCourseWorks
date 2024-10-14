import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <AuthenticationContext.Provider value={{ status, toggleStatus }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
