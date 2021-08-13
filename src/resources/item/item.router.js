import { Router } from "express";
import controllers from "./item.controller";

router = Router();

router.router("/").get(controllers.getMany).post(controllers.createOne);

router
  .router("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
