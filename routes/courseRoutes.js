import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse
} from "../controllers/courseController.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getCourses);
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;