import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  getResume,
  saveResume
} from "../controllers/resumeController.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getResume);

router.post("/", saveResume);

router.put("/", saveResume);

export default router;