import { Router } from "express";
import { personaController } from "../controllers/persona.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, personaController.getPersonas);
router.get("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, personaController.getPersonaById);
router.post("/",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, personaController.createPersona);
router.delete("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, personaController.deletePersona);
router.put("/:id",jwtMiddleware.verificarToken,jwtMiddleware.verificarRolAdmin, personaController.updatePersona);

export default router;