import { Sequelize } from "sequelize";

const connectToDB = async () => {
  try {
    if (
      !process.env.DB_NAME ||
      !process.env.DB_USER_NAME ||
      !process.env.DB_PASSWORD
    ) {
      throw new Error("Missing environment variables");
    }

    const sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER_NAME,
      process.env.DB_PASSWORD,
      {
        dialect: "mysql",
        host: process.env.DB_HOST_NAME,
        port: Number(process.env.DB_PORT),
      }
    );

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectToDB };
