import express from "express";
import {
  createProject,
  deleteEp,
  getProjectEpisodes,
  getProjects,
  postProjectEpisode,
  updateEd,
} from "../controllers/project.controller.js";

const projectRouter = express.Router();

projectRouter.get("/:userId", getProjects);

projectRouter.post("/create/:userId", createProject);

projectRouter.post("/createEpi/:projectId", postProjectEpisode);

projectRouter.get("/episode/:projectId", getProjectEpisodes);

projectRouter.delete("/episode/:EPprojectId", deleteEp);

projectRouter.patch("/episode/:EPprojectId", updateEd);


export default projectRouter;
