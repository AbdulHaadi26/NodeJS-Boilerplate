import express from "express";
import { signIn } from "../controller";

const router = express.Router();

router.post("/login", signIn);

export { router as authRouter };
