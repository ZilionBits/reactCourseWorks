import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import { Unauthorized } from "./Unauthorized";

export const Authorization = ({ permissions }) => {
  const { user } = useContext(AuthenticationContext);

  if (user.username) {
    const userPermissions = user.permissions;
    const isAllowed = permissions.some((allowed) =>
      userPermissions.includes(allowed)
    );

    return isAllowed ? <Outlet /> : <Unauthorized/>
  }

  return <Navigate to="/login" />;
};
