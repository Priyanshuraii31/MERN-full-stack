import React from "react";
import { Navigate } from "react-router-dom";
import { clearAuth, getToken, isTokenExpired } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (isTokenExpired(token)) {
    clearAuth();
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;