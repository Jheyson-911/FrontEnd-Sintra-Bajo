import { Router } from "express";
import { evaluacionController } from "../controllers/evaluacion.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, evaluacionController.getEvaluaciones);
router.get("/:id",jwtMiddleware.verificarToken, jwtMiddleware.verificarSiEsUsuario, evaluacionController.getEvaluacionById);
router.post("/",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrDocente, evaluacionController.createEvaluacion);
router.delete("/:id",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrDocente, evaluacionController.deleteEvaluacion);
router.put("/:id",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrDocente, evaluacionController.updateEvaluacion);

export default router;