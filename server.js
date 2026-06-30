import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";




dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/goal", goalRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/courses", courseRoutes);
app.use("/projects", projectRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});