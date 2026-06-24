const Project = require('../models/Project');

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single project
const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new project
const createProject = async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link,
    github: req.body.github,
    technologies: req.body.technologies || [],
    featured: req.body.featured || false,
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a project
const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    if (req.body.title) project.title = req.body.title;
    if (req.body.description) project.description = req.body.description;
    if (req.body.image) project.image = req.body.image;
    if (req.body.link) project.link = req.body.link;
    if (req.body.github) project.github = req.body.github;
    if (req.body.technologies) project.technologies = req.body.technologies;
    if (req.body.featured !== undefined) project.featured = req.body.featured;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
