import { Router } from "express";
import { empresaController } from "../controllers/empresa.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrSecretaria, empresaController.getEmpresas);
router.get("/:id", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria,empresaController.getEmpresaById);
router.post("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, empresaController.createEmpresa);
router.delete("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, empresaController.deleteEmpresa);
router.put("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, empresaController.updateEmpresa);

export default router;