import express from "express";
import { getProfile } from "../controller/employee.controller";

const router = express.Router();

router.get("/profile", getProfile);

export { router as employeeRouter };
