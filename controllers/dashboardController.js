import Goal from "../models/Goal.js";

export const getDashboard = async (req, res) => {
  try {
    const goals = await Goal.find({
      userId: req.user.id
    });

    const totalGoals = goals.length;

    const completedGoals = goals.filter(
      goal => goal.status === "Concluído"
    ).length;

    const pendingGoals = goals.filter(
      goal => goal.status === "Pendente"
    ).length;

    const progress =
      totalGoals > 0
        ? Math.round((completedGoals / totalGoals) * 100)
        : 0;

    res.json({
      totalGoals,
      completedGoals,
      pendingGoals,
      progress
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao carregar dashboard"
    });
  }
};