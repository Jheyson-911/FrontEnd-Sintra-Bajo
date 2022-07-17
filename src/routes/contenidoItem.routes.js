import { Router } from "express";
import { contenidoItemController } from "../controllers/contenidoItems.controller.js";
// import { ValidacionUsuario } from "../middlewares/ValidarUsuario.middleware.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente,contenidoItemController.getContenidoItems);
router.get("/:id",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrDocente, contenidoItemController.getContenidoItemById);
router.post("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente,contenidoItemController.createContenidoItem);
router.delete("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente ,contenidoItemController.deleteContenidoItem);
router.put("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocente, contenidoItemController.updateContenidoItem);

export default router;
