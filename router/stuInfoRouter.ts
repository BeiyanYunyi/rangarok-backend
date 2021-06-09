import express from "express";
import stuDBService from "../services/stuDBService";
import {
  fmtStudentsIntoBuilding,
  fmtStudentsIntoGroup,
  fmtStudentsIntoRoom,
} from "../formatStudent/formatStudent";
import getDate from "../utils/getDate";

// /api/getInf
const stuInfoRouter = express.Router();

stuInfoRouter.get("/getStudentsByGroup", (_req, res) => {
  res.json(fmtStudentsIntoGroup(stuDBService.data));
});
stuInfoRouter.get("/getStudentsByBuilding", (_req, res) => {
  res.json(fmtStudentsIntoBuilding(stuDBService.data));
});
stuInfoRouter.get("/getStudentsByRoom", (_req, res) => {
  res.json(fmtStudentsIntoRoom(stuDBService.data));
});

stuInfoRouter.get("/getGroupStatByName/:name", (req, res, next) => {
  const targetGroup = fmtStudentsIntoGroup(stuDBService.data).find(
    (group) => group.name === req.params.name
  );
  if (targetGroup) {
    const time = getDate();
    const groupStat = {
      name: targetGroup.name,
      signed: targetGroup.stus.filter((stus) => stus.signDate === time).length,
      total: targetGroup.stus.length,
    };
    res.json(groupStat);
  } else {
    next();
  }
});

export default stuInfoRouter;
