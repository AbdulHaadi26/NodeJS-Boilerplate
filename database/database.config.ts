import { Sequelize } from "sequelize";

if (
  !process.env.DB_HOST_NAME ||
  !process.env.DB_USER_NAME ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_NAME
) {
  throw new Error("Missing environment variables");
}

export const sequelize: Sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER_NAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST_NAME,
    port: Number(process.env.DB_PORT),
  }
);

export const connectToDB = async () => {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
