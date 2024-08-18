import { authRouter } from "./auth.route";
import { userRouter } from "./user.route";
import passport from "passport";

const defineRoutes = (app: any) => {
  app.use(
    `/api/user`,
    passport.authenticate("jwt", { session: false }),
    userRouter
  );
  app.use(`/api/auth`, authRouter);
};

export { defineRoutes };
