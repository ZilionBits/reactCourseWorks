import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Button, Form, Grid, Segment, Message } from "semantic-ui-react";
import { useAuth } from "../contextGlobal/AuthContext";
import { libraryApi } from "../libraryApi/LibraryApi";
import { parseJwt, handleLogError } from "../misc/Helpers";

function Login() {
  const [user, setUser] = useState(null);
  const Auth = useAuth();
  const isLoggedIn = Auth.userIsAuthenticated(user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e, { name, value }) => {
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(username && password)) {
      setIsError(true);
      return;
    }

    try {
      const response = await libraryApi.authenticate(username, password);
      const { accessToken } = response.data;
      const data = parseJwt(accessToken);
      const authenticatedUser = { data, accessToken };

      Auth.userLogin(authenticatedUser, accessToken);

      setUser(authenticatedUser);
      setUsername("");
      setPassword("");
      setIsError(false);
    } catch (error) {
      handleLogError(error);
      setIsError(true);
    }
  };

  if (isLoggedIn) {
    return <Navigate to={"/booksList"} />;
  }

  return (
    <Grid textAlign="center">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              autoFocus
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={username}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handleInputChange}
            />
            <Button color="violet" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          {`Don't have already an account? `}
          <NavLink to="/signup" color="violet" as={NavLink}>
            Sign Up
          </NavLink>
        </Message>
        {isError && (
          <Message negative>
            The username or password provided are incorrect!
          </Message>
        )}
      </Grid.Column>
    </Grid>
  );
}

export default Login;
