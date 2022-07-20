import { authController } from "../controllers/auth.controller.js";
import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.middleware.js";
// import { ValidarUsuario } from "../middlewares/ValidarUsuario.middleware.js";

const router = Router();

router.post("/register",
// jwtMiddleware.verificarToken,
 jwtMiddleware.ValidarUsuarioUnico,
// jwtMiddleware.verificarRolAdmin,
authController.register);
// router.get("/", authController.getUsers);
router.post("/login", authController.login);
// router.post("/login", authController.singIn);

export default router;





