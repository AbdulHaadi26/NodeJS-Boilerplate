import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import cors from "cors";
import { responseFormatter, passport } from "./middlewares";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(responseFormatter);

import { defineRoutes } from "./routes";
import { connectToDB } from "./database";
defineRoutes(app);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
  connectToDB();
});
