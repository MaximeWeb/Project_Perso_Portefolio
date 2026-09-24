import { useState } from "react";
import { loginAdmin } from "../services/authService.js";
import { useNavigate } from "react-router-dom";

function Admin() {
 const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");

      const data = await loginAdmin(email, password);

      localStorage.setItem("adminToken", data.token);

     navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-page">
      <div className="login-card">
        <p className="section-label">ADMINISTRATION</p>

        <h1>Connexion</h1>

        <p className="login-description">
          Connectez-vous pour gérer les projets du portfolio.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="admin-email">Email</label>

            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="admin-password">Mot de passe</label>

            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button
            className="contact-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>

          {error && <p className="login-error">{error}</p>}
        </form>
      </div>
    </main>
  );
}

export default Admin;