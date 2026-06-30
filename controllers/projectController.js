import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      userId: req.user.id
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const createProject = async (req, res) => {
  try {
    const {
      titulo,
      descricao,
      tecnologias,
      github,
      deploy,
      status
    } = req.body;

    const project = await Project.create({
      titulo,
      descricao,
      tecnologias,
      github,
      deploy,
      status,
      userId: req.user.id
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id
      },
      req.body,
      {
        new: true
      }
    );

    if (!project) {
      return res.status(404).json({
        message: "Projeto não encontrado"
      });
    }

    res.json(project);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!project) {
      return res.status(404).json({
        message: "Projeto não encontrado"
      });
    }

    res.json({
      message: "Projeto removido com sucesso"
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};