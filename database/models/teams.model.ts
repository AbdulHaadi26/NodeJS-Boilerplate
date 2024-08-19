import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";

const TeamModel = sequelize.define<Model>(
  "teams",
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
    },
  },
  {
    tableName: "teams",
    timestamps: true,
    indexes: [{ unique: true, fields: ["tenantId", "name"] }],
  }
);

export { TeamModel };
