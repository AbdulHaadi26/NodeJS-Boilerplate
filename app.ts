import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import passport from "passport";

dotenv.config();

import { connectToDB } from "./database";
import { defineRoutes } from "./routes";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

defineRoutes(app);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
  connectToDB();
});
