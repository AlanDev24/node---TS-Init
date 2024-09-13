import { Router } from "express";
import { EntityRoutes } from "./entity/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/entity", EntityRoutes.routes);

    return router;
  }
}
