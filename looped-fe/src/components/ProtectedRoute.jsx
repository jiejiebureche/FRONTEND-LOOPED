import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AUTH_TOKEN_KEY } from "../api"; // your storage key

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    setIsAuthorized(!!token); // true if token exists
  }, []);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
