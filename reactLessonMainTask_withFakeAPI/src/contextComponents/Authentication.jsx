import { AuthenticationContext } from "./AuthenticationContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Authentication = ({children}) => {
    const {user} = useContext(AuthenticationContext);

    if (!user.username) {
        return <Navigate to="/login"/>;
    }
    return children;
};

export default Authentication;