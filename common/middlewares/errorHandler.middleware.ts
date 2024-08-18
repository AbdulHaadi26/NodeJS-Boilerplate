import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err.status) {
    return res.error(err.status, err.message);
  }

  console.error(err.stack);
  res.error(500, "Internal Server Error");
}
