import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";

const EmployeeModel = sequelize.define<Model>(
  "employees",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tenantId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "employees",
    timestamps: true,
    indexes: [{ unique: true, fields: ["email"] }],
  }
);

export { EmployeeModel };
