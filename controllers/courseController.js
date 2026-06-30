import Course from "../models/Course.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({
      userId: req.user.id
    });

    res.json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const createCourse = async (req, res) => {
  try {
    const {
      titulo,
      descricao,
      plataforma,
      progresso,
      status
    } = req.body;

    const course = await Course.create({
      titulo,
      descricao,
      plataforma,
      progresso,
      status,
      userId: req.user.id
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id
      },
      req.body,
      {
        new: true
      }
    );

    if (!course) {
      return res.status(404).json({
        message: "Curso não encontrado"
      });
    }

    res.json(course);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!course) {
      return res.status(404).json({
        message: "Curso não encontrado"
      });
    }

    res.json({
      message: "Curso removido com sucesso"
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};