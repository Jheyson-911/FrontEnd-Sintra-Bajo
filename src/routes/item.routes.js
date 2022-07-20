import { Router } from "express";
import { itemController } from "../controllers/item.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente, itemController.getItems);
router.get("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente, itemController.getItemById);
router.post("/", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente,itemController.createItem);
router.delete("/:id", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente,itemController.deleteItem);
router.put("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente, itemController.updateItem);
router.get("/:id/contenido",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente, itemController.getContenidosByItem);
export default router;