import { Router } from "express";
import { estudianteController } from "../controllers/estudiante.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.getEstudiantes);
router.get("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrDocenteOrSecretaria, estudianteController.getEstudianteById);
router.post("/",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.createEstudiante);
router.delete("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, estudianteController.deleteEstudiante);
router.put("/:id", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria,estudianteController.updateEstudiante);
router.put("/:search", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria,estudianteController.searchNameOrCodigo);


export default router;