const API_URL =
  "https://project-perso-portefolio.onrender.com/api/auth";

export const loginAdmin = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erreur de connexion");
  }

  return data;
};

export const getCurrentAdmin = async () => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    throw new Error("Aucun token");
  }

  const response = await fetch(`${API_URL}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Session invalide");
  }

  return data;
};