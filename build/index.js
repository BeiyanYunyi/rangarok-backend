"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const stuDBService_1 = __importDefault(require("./services/stuDBService"));
const loginRouter_1 = __importDefault(require("./router/loginRouter"));
const stuInfoRouter_1 = __importDefault(require("./router/stuInfoRouter"));
const getDate_1 = __importDefault(require("./utils/getDate"));
const signRouter_1 = __importDefault(require("./router/signRouter"));
const unknownEndPoint_1 = __importDefault(require("./middleware/unknownEndPoint"));
const app = express_1.default();
app.use(cors_1.default());
app.use(morgan_1.default("tiny"));
app.use(express_1.default.static("dist"));
app.use(express_1.default.json());
app.use("/api/login", loginRouter_1.default);
app.use("/api/getInf", stuInfoRouter_1.default);
app.use("/api/signService", signRouter_1.default);
app.get("/api/getAllStudents", (_req, res) => {
    res.json(stuDBService_1.default.data);
});
app.get("/api/getSignedStudents", (_req, res) => {
    const time = getDate_1.default();
    const signedStudents = stuDBService_1.default.data
        .filter((stu) => stu.signDate === time)
        .map((stu) => stu.id);
    res.json(signedStudents);
});
app.use(unknownEndPoint_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`);
});
process.on("SIGINT", () => {
    process.stdin.resume();
    stuDBService_1.default.saveStuDB();
    process.exit(0);
});
