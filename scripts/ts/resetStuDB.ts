import { rmSync } from "fs";
rmSync(`${__dirname}/../../data/stuDBstored.json`, { force: true });
console.log('stuDB cleaned');
