import express from "express";
import {
  createProject,
  getProjects,
  postProjectEpisode,
} from "../controllers/project.controller.js";

const projectRouter = express.Router();

projectRouter.get("/:userId", getProjects);

projectRouter.post("/create/:userId", createProject);

projectRouter.post("/createEpi/:projectId", postProjectEpisode);

export default projectRouter;
