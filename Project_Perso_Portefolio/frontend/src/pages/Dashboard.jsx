import { useEffect, useState } from "react";


import {
  getProjects,
  deleteProject,
} from "../services/projectService.js";
import ProjectForm from "../components/ProjectForm.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import { Link, useNavigate } from "react-router-dom";




function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
const [projectToEdit, setProjectToEdit] = useState(null);

  const navigate = useNavigate();

  // Chargement des projets
 
useEffect(() => {
  const loadProjects = async () => {
    try {
      const data = await getProjects();

      setProjects(data);
    } catch (error) {
      console.error(
        "Erreur lors du chargement des projets :",
        error
      );
    }
  };

  loadProjects();
}, []);

  // Appelé lorsqu'un nouveau projet est créé
  const handleProjectCreated = (newProject) => {
    setProjects((previousProjects) => [
      ...previousProjects,
      newProject,
    ]);

    setShowForm(false);
  };

  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  const handleProjectUpdated = (updatedProject) => {
  setProjects((previousProjects) =>
    previousProjects.map((project) =>
      project._id === updatedProject._id
        ? updatedProject
        : project
    )
  );

  setProjectToEdit(null);
};

const handleDelete = async () => {
  if (!projectToDelete) {
    return;
  }

  try {
    await deleteProject(projectToDelete._id);

    setProjects((previousProjects) =>
      previousProjects.filter(
        (project) => project._id !== projectToDelete._id
      )
    );

    setProjectToDelete(null);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

  return (
    <main className="dashboard">
      {/* HEADER */}

     <div className="dashboard-header">
  <div>
    <p className="section-label">
      ADMINISTRATION
    </p>

    <h1>Mes projets</h1>
  </div>

  <div className="dashboard-navigation">
    <Link
      to="/admin/messages"
      className="admin-link"
    >
      Messages
    </Link>

    <button onClick={handleLogout}>
      Déconnexion
    </button>
  </div>
</div>

      {/* AJOUTER UN PROJET */}

     <button
  className="contact-button"
  onClick={() => {
    setShowForm(true);
    setProjectToEdit(null);
  }}
>
  + Ajouter un projet
</button>

      {/* FORMULAIRE */}

    
      {showForm && (
  <ProjectForm
    onProjectCreated={handleProjectCreated}
    onCancel={() => setShowForm(false)}
  />
)}

{projectToEdit && (
  <ProjectForm
    key={projectToEdit._id}
    project={projectToEdit}
    onProjectUpdated={handleProjectUpdated}
    onCancel={() => setProjectToEdit(null)}
  />
)}

      {/* LISTE DES PROJETS */}

      <div className="dashboard-projects">
        {projects.length === 0 ? (
          <p>Aucun projet pour le moment.</p>
        ) : (
          projects.map((project) => (
            <div
              className="dashboard-project"
              key={project._id}
            >
              <div>
                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="technologies">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="dashboard-actions">
              <button
  onClick={() => {
    setProjectToEdit(project);
    setShowForm(false);
  }}
>
  Modifier
</button>

         <button
  onClick={() => setProjectToDelete(project)}
>
  Supprimer
</button>
              </div>
            </div>
          ))
        )}
      </div>
      <DeleteModal
  project={projectToDelete}
  onConfirm={handleDelete}
  onCancel={() => setProjectToDelete(null)}
/>
    </main>
  );
}

export default Dashboard;