"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getGroup = (stuDB) => {
    const groupSet = new Set();
    stuDB.forEach((stu) => {
        groupSet.add(stu.groupName);
    });
    return Array.from(groupSet);
};
exports.default = getGroup;
