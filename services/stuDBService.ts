import stuDBData from "../data/stuDB";
import { StudentsType } from "../types/stuListTypes";
import fs from "fs";

class StuDBclass {
  data;
  constructor() {
    const dbExists = fs.existsSync(`${__dirname}/../data/stuDBstored.json`);
    if (dbExists) {
      console.log("\nData Loaded");
      this.data = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/stuDBstored.json`).toString()
      ) as StudentsType;
    } else {
      console.log("\nNo saved Data, initializing...");
      this.data = stuDBData;
    }
  }
  setStuDB(newDB: StudentsType): void {
    this.data = newDB;
  }
  saveStuDB() {
    console.log("\nSaving data");
    fs.writeFileSync(`${__dirname}/../data/stuDBstored.json`, JSON.stringify(this.data, null, 2));
    console.log("data saved.");
  }
}
const stuDBService = new StuDBclass();

export default stuDBService;
