"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getBuilding_1 = __importDefault(require("./getInfo/getBuilding"));
const divideIntoBuilding = (dividedGroup) => {
    const buildings = getBuilding_1.default(dividedGroup);
    const divided = buildings.map((building) => {
        const stus2ToFormat = dividedGroup.stus.filter((student) => student.buildingName === building);
        const stus2Formatted = stus2ToFormat.map((stu) => ({
            id: stu.id,
            name: stu.name,
            roomCode: stu.roomCode,
            signDate: stu.signDate,
        }));
        return {
            name: building,
            stus2: stus2Formatted,
        };
    });
    return divided;
};
exports.default = divideIntoBuilding;
