import { Router } from "express";
import { docenteController } from "../controllers/docente.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, docenteController.getDocentes);
router.get("/:id", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, docenteController.getDocenteById);
router.post("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin ,docenteController.createDocente);
router.delete("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, docenteController.deleteDocente);
router.put("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, docenteController.updateDocente);

export default router;