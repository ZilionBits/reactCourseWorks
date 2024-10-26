import { useState } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { useContext } from "react";

export const Login = () => {
  const [loginUser, setLoginUser] = useState();
  const { login } = useContext(AuthenticationContext);

  const handleInput = (e) => {
    setLoginUser(e.target.value);
  };

  const handleLogin = () => {
    login(loginUser);
  };

  return (
    <>
      <h1>Login Page</h1>
      <label>Name: </label>
      <input onChange={handleInput} type="text" />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
