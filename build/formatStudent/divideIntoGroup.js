"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getGroup_1 = __importDefault(require("./getInfo/getGroup"));
const divideIntoGroup = (stuDB) => {
    const groups = getGroup_1.default(stuDB);
    const divided = groups.map((group) => {
        const stusToFormat = stuDB.filter((student) => student.groupName === group);
        const stusFormatted = stusToFormat.map((stu) => ({
            id: stu.id,
            name: stu.name,
            roomCode: stu.roomCode,
            buildingName: stu.buildingName,
            signDate: stu.signDate,
        }));
        return {
            name: group,
            stus: stusFormatted,
        };
    });
    return divided;
};
exports.default = divideIntoGroup;
