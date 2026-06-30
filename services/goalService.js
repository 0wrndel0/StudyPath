import Goal from "../models/Goal.js";

export const getGoals = async () => {
  return await Goal.find();
};

export const createGoal = async (goalData) => {
  const goal = new Goal(goalData);
  return await goal.save();
};

export const updateGoal = async (id, goalData) => {
  return await Goal.findByIdAndUpdate(id, goalData, {
    new: true,
  });
};

export const deleteGoal = async (id) => {
  return await Goal.findByIdAndDelete(id);
};