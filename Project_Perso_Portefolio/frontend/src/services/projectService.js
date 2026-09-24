const API_URL = "http://localhost:5000/api/projects";

export const getProjects = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les projets");
  }

  return response.json();
};

export const createProject = async (projectData) => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(projectData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Impossible de créer le projet");
  }

  return data;
};

export const deleteProject = async (projectId) => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(`${API_URL}/${projectId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Impossible de supprimer le projet");
  }

  return data;
};