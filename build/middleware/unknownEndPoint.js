"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unknownEndPoint = (req, res, _next) => {
    res.status(404).send("Not found.");
    console.log(`[404] ${req.hostname} got a 404`);
};
exports.default = unknownEndPoint;
