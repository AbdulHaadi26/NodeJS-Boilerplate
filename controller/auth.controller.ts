import { Request, Response } from "express";
import { ResponseCodes } from "../types";
import { bcryptCompare, getEmployeeByEmail, jwtSign } from "../services";

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const employee: any = await getEmployeeByEmail(email);

    if (!employee) {
      return res.error(ResponseCodes.UNAUTHORIZED, "Employee not found");
    }

    const isPasswordValid = await bcryptCompare(password, employee.password);

    if (!isPasswordValid) {
      return res.error(ResponseCodes.UNAUTHORIZED, "Incorrect password");
    }

    const token = jwtSign({
      id: employee.id,
      tenantId: employee.tenantId,
    });

    res.success({
      token,
    });
  } catch (e) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, e);
  }
};

export { signIn };
