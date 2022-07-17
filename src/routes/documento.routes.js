import { Router } from "express";
import { documentoController } from "../controllers/documento.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, documentoController.getDocumentos);
router.get("/:id",jwtMiddleware.verificarToken, jwtMiddleware.verificarSiEsUsuario, documentoController.getDocumentoById);
router.post("/",jwtMiddleware.verificarToken, jwtMiddleware.verificarRolAdminOrStudent,  documentoController.createDocumento);
router.delete("/:id",jwtMiddleware.verificarRolAdminOrStudent, documentoController.deleteDocumento);
router.put("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrStudent, documentoController.updateDocumento);

export default router;
