import { Response } from "express-serve-static-core";
const unAuthorized = (
  err: Error,
  req: any,
  res: Response<any, Record<string, any>, number>,
  _next: any
) => {
  console.log(err.toString());
  if (err.name === "UnauthorizedError") {
    res.status(401).send("Unauthorized.");
    console.log(`[401] ${req.hostname} did an unauthorized request.`);
  }
};
export default unAuthorized;
