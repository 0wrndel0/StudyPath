import express from "express";
import goalsRoutes from "./routes/goalsRoutes.js";

const app = express();

app.use(express.json());

app.use("/goals", goalsRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});