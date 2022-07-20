import { Router } from "express";
import { practicaController } from "../controllers/practica.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrSecretaria, practicaController.getPracticas);
router.get("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretariaOrEstudiante, practicaController.getPracticaById);
router.post("/",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrSecretaria, practicaController.createPractica);
router.delete("/:id",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdmin, practicaController.deletePractica);
router.put("/:id",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrSecretaria, practicaController.updatePractica);
router.get("/:id/evaluaciones",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, practicaController.getEvaluacionesByPractica);

export default router;