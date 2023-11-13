import express from "express";
import cors from "cors";
import connection from "./config/db.js";
import userRouter from "./routes/user.route.js";
import projectRouter from "./routes/project.route.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.use("/user", userRouter);
app.use("/project", projectRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB is connected");
  } catch (error) {
    console.log("error connecting to db");
  }
  console.log(`server listening on port ${process.env.PORT}`);
});
