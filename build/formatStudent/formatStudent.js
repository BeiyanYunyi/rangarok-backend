"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fmtStudentsIntoRoom = exports.fmtStudentsIntoBuilding = exports.fmtStudentsIntoGroup = void 0;
const divideIntoBuilding_1 = __importDefault(require("./divideIntoBuilding"));
const divideIntoGroup_1 = __importDefault(require("./divideIntoGroup"));
const divideIntoRoom_1 = __importDefault(require("./divideIntoRoom"));
const fmtStudentsIntoGroup = (stuDB) => {
    return divideIntoGroup_1.default(stuDB);
};
exports.fmtStudentsIntoGroup = fmtStudentsIntoGroup;
const fmtStudentsIntoBuilding = (stuDB) => {
    const fmtedGroup = exports.fmtStudentsIntoGroup(stuDB);
    const fmtedBuilding = fmtedGroup.map((group) => {
        return { name: group.name, stus: divideIntoBuilding_1.default(group) };
    });
    return fmtedBuilding;
};
exports.fmtStudentsIntoBuilding = fmtStudentsIntoBuilding;
const fmtStudentsIntoRoom = (stuDB) => {
    const fmtedBuilding = exports.fmtStudentsIntoBuilding(stuDB);
    const fmtedRoom = fmtedBuilding.map((group) => {
        return {
            name: group.name,
            places: group.stus.map((building) => {
                return { name: building.name, rooms: divideIntoRoom_1.default(building) };
            }),
        };
    });
    return fmtedRoom;
};
exports.fmtStudentsIntoRoom = fmtStudentsIntoRoom;
