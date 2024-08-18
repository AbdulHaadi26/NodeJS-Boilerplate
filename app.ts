import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import passport from "passport";
import { defineRoutes } from "./routes";
import { responseFormatter } from "./common/middlewares";
import { errorHandler } from "./common/middlewares";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(responseFormatter);
app.use(errorHandler);

defineRoutes(app);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
});
