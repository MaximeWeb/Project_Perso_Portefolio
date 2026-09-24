import { useState } from "react";

import {
  createProject,
  updateProject,
} from "../services/projectService.js";

function ProjectForm({
  project = null,
  onProjectCreated,
  onProjectUpdated,
  onCancel,
}) {
  const isEditing = Boolean(project);

  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    technologies: project?.technologies?.join(", ") || "",
    image: project?.image || "",
    githubUrl: project?.githubUrl || "",
    demoUrl: project?.demoUrl || "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");

      const projectData = {
        ...formData,

        technologies: formData.technologies
          .split(",")
          .map((technology) => technology.trim())
          .filter(Boolean),
      };

      if (isEditing) {
        const updatedProject = await updateProject(
          project._id,
          projectData
        );

        onProjectUpdated(updatedProject);
      } else {
        const newProject = await createProject(projectData);

        onProjectCreated(newProject);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>
        {isEditing
          ? "Modifier le projet"
          : "Ajouter un projet"}
      </h2>

      <div className="form-group">
        <label htmlFor="title">Titre</label>

        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">
          Description
        </label>

        <textarea
          id="description"
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="technologies">
          Technologies
        </label>

        <input
          id="technologies"
          name="technologies"
          placeholder="React, Node.js, MongoDB"
          value={formData.technologies}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">
          URL de l'image
        </label>

        <input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="githubUrl">
          Lien GitHub
        </label>

        <input
          id="githubUrl"
          name="githubUrl"
          value={formData.githubUrl}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="demoUrl">
          Lien vers la démo
        </label>

        <input
          id="demoUrl"
          name="demoUrl"
          value={formData.demoUrl}
          onChange={handleChange}
        />
      </div>

      {error && (
        <p className="login-error">
          {error}
        </p>
      )}

      <div className="dashboard-actions">
        <button
          className="contact-button"
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Enregistrement..."
            : isEditing
              ? "Enregistrer les modifications"
              : "Créer le projet"}
        </button>

        <button
          type="button"
          onClick={onCancel}
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;