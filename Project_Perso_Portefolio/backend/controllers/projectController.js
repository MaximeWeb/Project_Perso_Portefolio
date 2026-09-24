const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des projets",
    });
  }
};

const createProject = async (req, res) => {
  try {
    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      technologies: req.body.technologies,
      image: req.body.image,
      githubUrl: req.body.githubUrl,
      demoUrl: req.body.demoUrl,
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({
      message: "Impossible de créer le projet",
      error: error.message,
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Projet introuvable",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({
      message: "ID de projet invalide",
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return res.status(404).json({
        message: "Projet introuvable",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({
      message: "Impossible de modifier le projet",
      error: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Projet introuvable",
      });
    }

    res.status(200).json({
      message: "Projet supprimé avec succès",
    });
  } catch (error) {
    res.status(400).json({
      message: "Impossible de supprimer le projet",
    });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};