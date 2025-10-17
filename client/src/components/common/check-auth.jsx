import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, allowedRoles = [], children }) {
  const location = useLocation();

  // Wait until checkAuth completes
  if (isAuthenticated === null) return <div>Loading...</div>;

  if (!isAuthenticated || !user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    if (user?.role === "admin")
      return <Navigate to="/admin/dashboard" replace />;
    return <Navigate to="/shop/home" replace />;
  }

  return children;
}

export default CheckAuth;
