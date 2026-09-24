import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { getCurrentAdmin } from "../services/authService.js";

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        await getCurrentAdmin();

        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem("adminToken");

        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  // Pendant la vérification du JWT
  if (isAuthenticated === null) {
    return (
      <main className="admin-page">
        <p>Vérification de la session...</p>
      </main>
    );
  }

  // JWT absent, invalide ou expiré
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  // JWT valide
  return children;
}

export default ProtectedRoute;