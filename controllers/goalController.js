let goals = [];

export const getGoals = (req, res) => {
  res.json(goals);
};

export const createGoal = (req, res) => {
  const { titulo, descricao } = req.body;

  const newGoal = {
    id: goals.length + 1,
    titulo,
    descricao,
    status: "Em andamento"
  };

  goals.push(newGoal);

  res.status(201).json(newGoal);
};

export const updateGoal = (req, res) => {
  const { id } = req.params;

  const goalIndex = goals.findIndex(g => g.id === parseInt(id));

  if (goalIndex === -1) {
    return res.status(404).json({ message: "Meta não encontrada" });
  }

  goals[goalIndex] = {
    ...goals[goalIndex],
    ...req.body
  };

  res.json(goals[goalIndex]);
};

export const deleteGoal = (req, res) => {
  const { id } = req.params;

  const goalIndex = goals.findIndex(g => g.id === parseInt(id));

  if (goalIndex === -1) {
    return res.status(404).json({ message: "Meta não encontrada" });
  }

  const removed = goals.splice(goalIndex, 1);

  res.json(removed[0]);
};