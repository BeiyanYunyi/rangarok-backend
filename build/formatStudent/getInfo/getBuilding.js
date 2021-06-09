"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBuilding = (stuDB) => {
    const buildingSet = new Set();
    stuDB.stus.forEach((stu) => {
        buildingSet.add(stu.buildingName);
    });
    return Array.from(buildingSet);
};
exports.default = getBuilding;
