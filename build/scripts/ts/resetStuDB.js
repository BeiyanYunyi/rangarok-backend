"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
fs_1.rmSync(`${__dirname}/../../data/stuDBstored.json`, { force: true });
console.log('stuDB cleaned');
