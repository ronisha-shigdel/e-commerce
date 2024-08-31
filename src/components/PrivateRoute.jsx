import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return isAuthenticated ? <Component /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
