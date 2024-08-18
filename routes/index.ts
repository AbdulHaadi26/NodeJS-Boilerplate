import { userRouter } from "./user.route";

const defineRoutes = (app: any) => {
  app.use(`/api/user`, userRouter);
};

export { defineRoutes };
