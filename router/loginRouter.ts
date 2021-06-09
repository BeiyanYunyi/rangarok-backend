import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwtSecret from "../data/jwtSecret";
import pwdHash from "../data/pwdHash";

// /api/login
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  if (!req.body) return res.status(401).json({ error: "Invalid request" });
  if (typeof req.body.password !== "string")
    return res.status(401).json({ error: "Invalid password" });
  const body = req.body;
  const passwordCorrect = await bcrypt.compare(body.password, pwdHash);
  if (!passwordCorrect) {
    return res.status(401).json({ error: "Password incorrect" });
  }
  const token: string = jwt.sign({ user: "root" }, jwtSecret);
  res.status(200).send({ token, user: "root" });
  return null;
});

export default loginRouter;
