import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";

const TenantModel = sequelize.define<Model>(
  "tenants",
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
    tenantId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "tenants",
    timestamps: true,
    indexes: [{ unique: true, fields: ["tenantId"] }],
  }
);

export { TenantModel };
