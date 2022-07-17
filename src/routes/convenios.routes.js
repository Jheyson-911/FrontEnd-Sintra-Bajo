import { Router } from "express";
import { conveniosController } from "../controllers/convenios.controller.js";

import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/", jwtMiddleware.verificarToken, jwtMiddleware.verificarSiEsUsuario, conveniosController.getConvenios);
router.post("/", jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdmin, conveniosController.createConvenios);
router.get("/:id", jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdmin, conveniosController.getConveniosById);
router.delete("/:id", jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdmin, conveniosController.deleteConvenios);
router.put("/:id", jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdmin, conveniosController.updateConvenios);

export default router;