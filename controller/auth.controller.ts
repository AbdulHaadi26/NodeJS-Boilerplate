import { Request, Response } from "express";
import { ResponseCodes } from "../shared/types";

const signIn = async (req: Request, res: Response) => {
  try {
    res.success({ token: 1 }, ResponseCodes.SUCCESS);
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR);
  }
};

export { signIn };
