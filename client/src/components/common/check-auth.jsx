import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, allowedRoles = [], children }) {
  const location = useLocation();

  // 1️⃣ Not logged in → redirect to login
  if (!isAuthenticated || !user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // 2️⃣ Logged in but role not allowed for this route
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    // Redirect user to their proper section
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/shop/home" replace />;
    }
  }

  // 3️⃣ Authorized → render protected content
  return children;
}

export default CheckAuth;
