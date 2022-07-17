import { Router } from "express";
import { solicitudController } from "../controllers/solicitud.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretaria, solicitudController.getSolicitudes);
router.get("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrSecretariaOrEstudiante, solicitudController.getSolicitudById);
router.post("/", jwtMiddleware.verificarRolAdminOrStudent, solicitudController.createSolicitud);
router.delete("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrStudent, solicitudController.deleteSolicitud);
router.put("/:id", jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdminOrStudent, solicitudController.updateSolicitud);

export default router;