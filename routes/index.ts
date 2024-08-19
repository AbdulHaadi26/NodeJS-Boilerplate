import { authRouter } from "./auth.route";
import { employeeRouter } from "./employee.route";
import passport from "passport";

const defineRoutes = (app: any) => {
  app.use(
    `/api/employees`,
    passport.authenticate("jwt", { session: false }),
    employeeRouter
  );
  app.use(`/api/auth`, authRouter);
};

export { defineRoutes };
