import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { PATH } from "../../App";
import { useAuth } from "./AuthContext";

const NavigateWithNotif = ({ to = "/", message = "" }) => {
  const { setNotif } = useAuth();
  useEffect(() => {
    setNotif(message);
  }, []);
  return <Navigate to={to} />;
};
export const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? (
    children
  ) : (
    <NavigateWithNotif to={PATH.login} message="Please Log in first" />
  );
};
