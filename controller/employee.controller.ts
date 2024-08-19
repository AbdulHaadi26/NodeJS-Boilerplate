import { Request, Response } from "express";
import { JWTPayloadType, ResponseCodes } from "../types";
import { getEmployeeById } from "../services";

const getProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.user as JWTPayloadType;

    const employee = await getEmployeeById(id);

    if (!employee) {
      return res.error(ResponseCodes.UNAUTHORIZED, "Employee not found");
    }

    res.success(employee);
  } catch (e) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, e);
  }
};

export { getProfile };
