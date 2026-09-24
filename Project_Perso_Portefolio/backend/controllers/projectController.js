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

module.exports = {
  getProjects,
  createProject,
};