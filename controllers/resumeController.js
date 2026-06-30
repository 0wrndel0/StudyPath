import Resume from "../models/Resume.js";

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      userId: req.user.id
    });

    if (!resume) {
      return res.json(null);
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const saveResume = async (req, res) => {
  try {
    const data = req.body;

    let resume = await Resume.findOne({
      userId: req.user.id
    });

    if (resume) {
      resume = await Resume.findOneAndUpdate(
        {
          userId: req.user.id
        },
        data,
        {
          new: true
        }
      );
    } else {
      resume = await Resume.create({
        ...data,
        userId: req.user.id
      });
    }

    res.json(resume);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};