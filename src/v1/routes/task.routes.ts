import express from "express";
import { TaskController } from "../../controllers/task.controller";

export const taskRouter = express.Router();

taskRouter.get("/", TaskController.getAll);
