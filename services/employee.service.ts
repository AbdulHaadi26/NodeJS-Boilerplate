import { EmployeeModel } from "../database";

const getEmployeeByEmail = async (email: string) => {
  const employee = await EmployeeModel.findOne({ where: { email } });
  return employee;
};

const getEmployeeById = async (id: number) => {
  const employee = await EmployeeModel.findOne({ where: { id } });
  return employee;
};

export { getEmployeeByEmail, getEmployeeById };
