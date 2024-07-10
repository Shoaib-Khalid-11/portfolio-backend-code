import express from "express";
import {
  getAllProjects,
  addNewProject,
  deleteProject,
  updateProject,
  getSingleProject,
} from "../controller/projectController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.get("/getall", getAllProjects);
router.post("/add", isAuthenticated, addNewProject);
router.delete("/delete/:id", isAuthenticated, deleteProject);
router.put("/update/:id", isAuthenticated, updateProject);
router.get("/get/:id", getSingleProject);
export default router;
