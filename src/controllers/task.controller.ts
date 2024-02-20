import { Request, Response } from "express";

class taskController {
  constructor() {}

  getAll = async (req: Request, res: Response) => {
    res.status(200).json("return all tasks");
  };
}

export const TaskController = new taskController();
