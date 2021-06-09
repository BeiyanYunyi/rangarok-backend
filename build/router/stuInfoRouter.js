"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stuDBService_1 = __importDefault(require("../services/stuDBService"));
const formatStudent_1 = require("../formatStudent/formatStudent");
const getDate_1 = __importDefault(require("../utils/getDate"));
const stuInfoRouter = express_1.default.Router();
stuInfoRouter.get("/getStudentsByGroup", (_req, res) => {
    res.json(formatStudent_1.fmtStudentsIntoGroup(stuDBService_1.default.data));
});
stuInfoRouter.get("/getStudentsByBuilding", (_req, res) => {
    res.json(formatStudent_1.fmtStudentsIntoBuilding(stuDBService_1.default.data));
});
stuInfoRouter.get("/getStudentsByRoom", (_req, res) => {
    res.json(formatStudent_1.fmtStudentsIntoRoom(stuDBService_1.default.data));
});
stuInfoRouter.get("/getGroupStatByName/:name", (req, res, next) => {
    const targetGroup = formatStudent_1.fmtStudentsIntoGroup(stuDBService_1.default.data).find((group) => group.name === req.params.name);
    if (targetGroup) {
        const time = getDate_1.default();
        const groupStat = {
            name: targetGroup.name,
            signed: targetGroup.stus.filter((stus) => stus.signDate === time).length,
            total: targetGroup.stus.length,
        };
        res.json(groupStat);
    }
    else {
        next();
    }
});
exports.default = stuInfoRouter;
