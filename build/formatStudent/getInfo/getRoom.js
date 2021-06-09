"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRoom = (stus2) => {
    const roomSet = new Set();
    stus2.forEach((stu) => {
        roomSet.add(stu.roomCode);
    });
    return Array.from(roomSet);
};
exports.default = getRoom;
