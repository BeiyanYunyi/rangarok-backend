import express from "express";
import jwt from "express-jwt";
import jwtSecret from "../data/jwtSecret";
import stuDBService from "../services/stuDBService";
import unAuthorized from "../middleware/unAuthorized";
import unknownEndPoint from "../middleware/unknownEndPoint";
import getDate from "../utils/getDate";

// /api/signService
const signRouter = express.Router();
signRouter.use(jwt({ secret: jwtSecret, algorithms: ["HS256"] }));
signRouter.use(unAuthorized);

signRouter.get("/signaStudentById/:id", (req, res, next) => {
  const stu = stuDBService.data.find((stu) => stu.id === req.params.id);
  if (stu) {
    const newStu = stuDBService.data.map((item) => {
      if (item.id === stu.id) {
        return { ...item, signDate: getDate() };
      } else {
        return item;
      }
    });
    stuDBService.setStuDB(newStu);
    res.json({
      status: `已为${stu.name}签到`,
      date: getDate(),
      id: stu.id,
    });
  } else {
    next();
  }
});

signRouter.get("/unsignaStudentById/:id", (req, res, next) => {
  const stu = stuDBService.data.find((stu) => stu.id === req.params.id);
  if (stu) {
    const newStu = stuDBService.data.map((item) => {
      if (item.id === stu.id) {
        return { ...item, signDate: "" };
      } else {
        return item;
      }
    });
    stuDBService.setStuDB(newStu);
    res.json({
      status: `已取消${stu.name}签到`,
      id: stu.id,
    });
  } else {
    next();
  }
});
signRouter.use(unknownEndPoint);

export default signRouter;
