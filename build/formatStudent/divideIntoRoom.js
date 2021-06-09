"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRoom_1 = __importDefault(require("./getInfo/getRoom"));
const divideIntoRoom = (dividedBuilding) => {
    const rooms = getRoom_1.default(dividedBuilding.stus2);
    const dividedRoom = rooms.map((room) => {
        const stus3ToFormat = dividedBuilding.stus2.filter((student) => student.roomCode === room);
        const stus3Formatted = stus3ToFormat.map((stu) => ({
            id: stu.id,
            name: stu.name,
            signDate: stu.signDate,
        }));
        return { code: room, peoples: stus3Formatted };
    });
    return dividedRoom;
};
exports.default = divideIntoRoom;
