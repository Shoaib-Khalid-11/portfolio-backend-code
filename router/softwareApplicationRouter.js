import express from "express";
import {
  addNewApplication,
  deleteApplication,
  getAllApplications,
  //   getSoftwareApplication,
} from "../controller/softwareApplicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/add", isAuthenticated, addNewApplication);
router.delete("/delete/:id", isAuthenticated, deleteApplication);
router.get("/getall", getAllApplications);
// router.get("/get/:id", isAuthenticated, getSoftwareApplication);
export default router;
