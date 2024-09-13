import { Router } from "express";
import { EntityController } from "./controller";

export class EntityRoutes {
  static get routes(): Router {
    const router = Router();

    const entituController = new EntityController();

    router.get('/', entituController.getEntity)


    return router;
  }
}
