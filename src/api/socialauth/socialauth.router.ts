import express from "express";
import { SocialAuthController } from "./socialauth.controller";

///////////////////////////////////////////////////////////////////////////////////

export const register = (app: express.Application): void => {
  const router = express.Router();
  const controller = new SocialAuthController();

  router.get("/all", controller.getAll);
  router.post("/", controller.create);
  router.put("/:id", controller.update);
  router.get("/:id", controller.getById);
  router.delete("/:id", controller.delete);

  app.use("/api/v1/socialauth", router);
};
