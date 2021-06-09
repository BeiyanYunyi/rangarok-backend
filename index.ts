import cors from "cors";
import express from "express";
import morgan from "morgan";
import stuDBService from "./services/stuDBService";
import loginRouter from "./router/loginRouter";
import stuInfoRouter from "./router/stuInfoRouter";
import { StudentType } from "./types/stuListTypes";
import getDate from "./utils/getDate";
import signRouter from "./router/signRouter";
import unknownEndPoint from "./middleware/unknownEndPoint";

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.static("dist"));
app.use(express.json());

app.use("/api/login", loginRouter);
app.use("/api/getInf", stuInfoRouter);
app.use("/api/signService", signRouter);

app.get("/api/getAllStudents", (_req, res) => {
  res.json(stuDBService.data);
});

app.get("/api/getSignedStudents", (_req, res) => {
  const time = getDate();
  const signedStudents: Array<string> = stuDBService.data
    .filter((stu: StudentType) => stu.signDate === time)
    .map((stu: StudentType) => stu.id);
  res.json(signedStudents);
});

app.use(unknownEndPoint);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
});

process.on("SIGINT", () => {
  process.stdin.resume();
  stuDBService.saveStuDB();
  process.exit(0);
});
