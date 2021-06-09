"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stuDB_1 = __importDefault(require("../data/stuDB"));
const fs_1 = __importDefault(require("fs"));
class StuDBclass {
    constructor() {
        const dbExists = fs_1.default.existsSync(`${__dirname}/../data/stuDBstored.json`);
        if (dbExists) {
            console.log("\nData Loaded");
            this.data = JSON.parse(fs_1.default.readFileSync(`${__dirname}/../data/stuDBstored.json`).toString());
        }
        else {
            console.log("\nNo saved Data, initializing...");
            this.data = stuDB_1.default;
        }
    }
    setStuDB(newDB) {
        this.data = newDB;
    }
    saveStuDB() {
        console.log("\nSaving data");
        fs_1.default.writeFileSync(`${__dirname}/../data/stuDBstored.json`, JSON.stringify(this.data, null, 2));
        console.log("data saved.");
    }
}
const stuDBService = new StuDBclass();
exports.default = stuDBService;
