import express from "express";

const router = express.Router();

router.get(`/profile`, (req, res) => res.send(`Profile`));

export { router as userRouter };
