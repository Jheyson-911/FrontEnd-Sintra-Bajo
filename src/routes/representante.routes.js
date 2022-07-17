import { Router } from "express";
import { representanteController } from "../controllers/representante.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, representanteController.getRepresentantes);
router.get("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, representanteController.getRepresentanteById);
router.post("/", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria,representanteController.createRepresentante);
router.delete("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, representanteController.deleteRepresentante);
router.put("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, representanteController.updateRepresentante);

export default router;