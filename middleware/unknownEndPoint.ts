import { Response } from "express-serve-static-core";
const unknownEndPoint = (
  req: any,
  res: Response<any, Record<string, any>, number>,
  _next: any
) => {
  res.status(404).send("Not found.");
  console.log(`[404] ${req.hostname} got a 404`);
};
export default unknownEndPoint;