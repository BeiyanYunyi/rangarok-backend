"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unAuthorized = (err, req, res, _next) => {
    console.log(err.toString());
    if (err.name === "UnauthorizedError") {
        res.status(401).send("Unauthorized.");
        console.log(`[401] ${req.hostname} did an unauthorized request.`);
    }
};
exports.default = unAuthorized;
