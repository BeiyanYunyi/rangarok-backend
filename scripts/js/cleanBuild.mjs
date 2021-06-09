import { rmSync } from "fs";
rmSync("build", { force: true, recursive: true });
console.log("Build dir cleaned.");
