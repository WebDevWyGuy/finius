import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation(); // Capture the current location

  if (!isAuthenticated()) {
    return (
      <Navigate to="/auth" replace state={{ redirectTo: location.pathname }} />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
