import User from "../models/User.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-senha");

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado"
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { nome, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        nome,
        email
      },
      {
        new: true
      }
    ).select("-senha");

    res.json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};