import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Response {
      success: (data: any, status?: number) => void;
      error: (status: number, message?: string) => void;
    }
  }
}

export function responseFormatter(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.success = (data: any, status: number = 200): void => {
    res.status(status).json({
      status,
      data,
    });
  };

  res.error = (status: number, message?: string): void => {
    const predefinedMessages: Record<number, string> = {
      401: "Unauthorized",
      500: "Internal Server Error",
    };

    res.status(status).json({
      status,
      message: predefinedMessages[status] ?? message ?? "An error occurred",
    });
  };

  next();
}
