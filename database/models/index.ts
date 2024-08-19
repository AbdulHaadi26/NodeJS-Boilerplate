import { TenantModel } from "./tenants.model";
import { EmployeeModel } from "./employees.model";
import { TeamModel } from "./teams.model";

EmployeeModel.belongsTo(TenantModel, {
  foreignKey: "tenantId",
  targetKey: "tenantId",
});
EmployeeModel.belongsToMany(TeamModel, { through: "employee_teams" });

TeamModel.belongsTo(TenantModel, {
  foreignKey: "tenantId",
  targetKey: "tenantId",
});
TeamModel.belongsToMany(EmployeeModel, { through: "employee_teams" });

TenantModel.hasMany(EmployeeModel, { foreignKey: "tenantId" });
TenantModel.hasMany(TeamModel, { foreignKey: "tenantId" });

export { EmployeeModel, TeamModel, TenantModel };
