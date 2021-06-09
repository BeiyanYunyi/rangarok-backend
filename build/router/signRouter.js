"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_jwt_1 = __importDefault(require("express-jwt"));
const jwtSecret_1 = __importDefault(require("../data/jwtSecret"));
const stuDBService_1 = __importDefault(require("../services/stuDBService"));
const unAuthorized_1 = __importDefault(require("../middleware/unAuthorized"));
const unknownEndPoint_1 = __importDefault(require("../middleware/unknownEndPoint"));
const getDate_1 = __importDefault(require("../utils/getDate"));
const signRouter = express_1.default.Router();
signRouter.use(express_jwt_1.default({ secret: jwtSecret_1.default, algorithms: ["HS256"] }));
signRouter.use(unAuthorized_1.default);
signRouter.get("/signaStudentById/:id", (req, res, next) => {
    const stu = stuDBService_1.default.data.find((stu) => stu.id === req.params.id);
    if (stu) {
        const newStu = stuDBService_1.default.data.map((item) => {
            if (item.id === stu.id) {
                return Object.assign(Object.assign({}, item), { signDate: getDate_1.default() });
            }
            else {
                return item;
            }
        });
        stuDBService_1.default.setStuDB(newStu);
        res.json({
            status: `已为${stu.name}签到`,
            date: getDate_1.default(),
            id: stu.id,
        });
    }
    else {
        next();
    }
});
signRouter.get("/unsignaStudentById/:id", (req, res, next) => {
    const stu = stuDBService_1.default.data.find((stu) => stu.id === req.params.id);
    if (stu) {
        const newStu = stuDBService_1.default.data.map((item) => {
            if (item.id === stu.id) {
                return Object.assign(Object.assign({}, item), { signDate: "" });
            }
            else {
                return item;
            }
        });
        stuDBService_1.default.setStuDB(newStu);
        res.json({
            status: `已取消${stu.name}签到`,
            id: stu.id,
        });
    }
    else {
        next();
    }
});
signRouter.use(unknownEndPoint_1.default);
exports.default = signRouter;
