const API_URL = "http://localhost:5000/api/projects";

export const getProjects = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les projets");
  }

  return response.json();
};