import express from "express";
import dotenv from "dotenv";
import { taskRouter } from "./v1/routes/task.routes";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const v1 = "v1";
app.use(`/api/${v1}/tasks`, taskRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} 🚀`);
});
