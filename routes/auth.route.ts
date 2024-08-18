import express from "express";
import { signIn } from "../controller";

const router = express.Router();

router.get("/signin", signIn);

export { router as authRouter };
