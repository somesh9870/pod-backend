import express from "express";
import {
  createProject,
  deleteEp,
  getProjectEpisodes,
  getProjects,
  postProjectEpisode,
} from "../controllers/project.controller.js";

const projectRouter = express.Router();

projectRouter.get("/:userId", getProjects);

projectRouter.post("/create/:userId", createProject);

projectRouter.post("/createEpi/:projectId", postProjectEpisode);

projectRouter.get("/episode/:projectId", getProjectEpisodes);

projectRouter.delete("/project/:projectId", deleteEp);

export default projectRouter;
